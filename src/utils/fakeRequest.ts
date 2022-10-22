export async function fakeRequest(time: number, error?: boolean) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      error ? reject(null) :  resolve(null)
    }, time)
  })
}