import { api } from "../services/api";

import {
  useQuery,
} from '@tanstack/react-query'
import { Car } from "../pages/Cars/List";

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