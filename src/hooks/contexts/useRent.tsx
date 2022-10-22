import React, { createContext, useContext, useEffect, useState } from 'react'
import { Car } from '../../pages/Cars/List'

interface IRentContext {
  isPeriodSelected: boolean
  period: Date[]
  setPeriod: (period: Date[] | null) => void
  selectedCar: Car | null
  setSelectedCar: (car: Car) => void
}

interface ProviderProps {
  children: React.ReactNode
}

const RentContext = createContext<IRentContext>({} as IRentContext)

const RentProvider: React.FC<ProviderProps> = ({ children }) => {
  const [period, setPeriod] = useState<Date[] | null>(null);
  const isPeriodSelected = !!period

  const [selectedCar, setSelectedCar] = useState<Car | null>(null)

  useEffect(() => {
    setPeriod(null)
  }, [selectedCar])

  return (
    <RentContext.Provider value={{ 
      isPeriodSelected,
      period: period as Date[],
      setPeriod,
      selectedCar,
      setSelectedCar,
    }}>
      {children}
    </RentContext.Provider>
  )
}

function useRent (): IRentContext {
  const context = useContext(RentContext)

  if (!context) {
    throw new Error('useRent must be used within an RentProvider')
  }
  
  return context
}

export { useRent, RentProvider }