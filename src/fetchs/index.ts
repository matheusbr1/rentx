import { api } from "../services/api";
import { useQuery } from '@tanstack/react-query'
import { Car } from "../pages/Cars/List";
import { User } from "../hooks/contexts/useAuth";
import { Rent } from "../pages/Account/Profile";

const staleTimes = {
  OneDay: 1000 * 60 * 60 * 24 // 24 hours
}

export function useCars () {
  return useQuery<Car[]>(
    ["cars"], 
    () => api.get('/cars/available').then((res) => res.data),
    {  staleTime:  staleTimes.OneDay }
  );
}

export function useProfile () {
  return useQuery<User>(
    ["profile"], 
    () => api.get('users/profile').then((res) => {
      const userProfile: User = {
        name: res.data.name,
        email: res.data.email,
        avatar_URL: res.data.avatar_URL,
        driver_license: res.data.driver_license,
      }

      localStorage.setItem('@rentx:user', JSON.stringify(userProfile))

      return userProfile
    }),
    {  staleTime:  staleTimes.OneDay }
  );
}

export function useUserRentals () {
  return useQuery<Rent[]>(
    ["rentals"], 
    () => api.get('rentals/user').then((res) =>  res.data),
    {  staleTime:  staleTimes.OneDay }
  );
}