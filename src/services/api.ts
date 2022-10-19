import axios, { AxiosError, AxiosRequestHeaders, HeadersDefaults } from 'axios'
import { parseCookies, setCookie } from 'nookies'

let cookies = parseCookies()
let isRefreshing = false
let failedRequestsQueue = [] as any[]

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${cookies['rentx.token']}`
  }
})

export { api }

interface APIHeaders extends HeadersDefaults {
  Authorization: string
}

// Intercepting the request to refresh token
api.interceptors.response.use(response => {
  return response // did sucess
}, (error: AxiosError) => {
  if (error.response?.status === 401) {
    const data = error.response?.data as any
    
    // Renew token
    if (data?.message === 'Invalid token') {
      // Updating cookies
      cookies = parseCookies()

      const { 'rentx.refresh_token': refresh_token } = cookies

      // config from request
      const originalConfig = error.config

      // Call refresh token endpoint if has not a refrest in progress
      if (!isRefreshing) {
        isRefreshing = true // Prevent multiple refresh tokens

        api.post('/refresh_token', {
          token: refresh_token
        }).then(response => {
          const data = response.data
  
          // Setting JWT into cookies
          const expiresIn = 60 * 60 * 24 * 30 // 30 days
          setCookie(undefined, 'rentx.token', data.token, { maxAge: expiresIn, path: '/' })
          setCookie(undefined, 'rentx.refresh_token', data.refresh_token, { maxAge: expiresIn, path: '/' })
  
          const headers = api.defaults.headers as APIHeaders
  
          // Updating Token into API
          headers['Authorization'] = `Bearer ${data.token}`

          // Retring the failed requests
          failedRequestsQueue.forEach(request => {
            request.onSuccess(data.token)
          })
        }).catch(err => {
          // Aborting failed requests
          failedRequestsQueue.forEach(request => {
            request.onFailure()
          })
        }).finally(() => {
          // Reseting Refreshing status
          isRefreshing = false
          // Clearing queue
          failedRequestsQueue = []
        })
      }

       // requests queue
       return new Promise((resolve, reject) => {
        // pushing the failed request
        failedRequestsQueue.push({
          // resolve
          onSuccess: (token: string) => {
            // updating token into api headers
            const headers = originalConfig.headers as AxiosRequestHeaders 
            headers['Authorization'] = `Bearer ${token}`
            originalConfig.headers = headers
            
            // retry request
            resolve(api(originalConfig))
          },
          // reject
          onFailure: (error: AxiosError) => {
            reject(error)
          }
        })
       })
    } else {
      // user signout
    }
  }
})