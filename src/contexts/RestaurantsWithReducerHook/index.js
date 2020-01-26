import React, { createContext } from "react"
import { useDuckedRestaurantsData } from "hooks/useDuckedRestaurantsData"

export const RestaurantsWithReducerContext = createContext({})

export const RestaurantsWithReducerProvider = ({ children }) => {
  const { list, loading, error, sortAsc, sortDesc, sort } = useDuckedRestaurantsData()

  return (
    <RestaurantsWithReducerContext.Provider value={{ list, loading, error, sortAsc, sortDesc, sort }}>
      {children}
    </RestaurantsWithReducerContext.Provider>
  )
}
