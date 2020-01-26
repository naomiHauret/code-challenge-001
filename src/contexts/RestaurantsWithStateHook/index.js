import React, { createContext } from "react"
import { useRestaurantsData } from "hooks/useRestaurantsData"

export const RestaurantsContext = createContext({})
export const RestaurantsProvider = ({ children }) => {
  const { list, loading, error, sort, sortAsc, sortDesc } = useRestaurantsData()

  return (
    <RestaurantsContext.Provider value={{ list, loading, error, sort, sortAsc, sortDesc }}>
      {children}
    </RestaurantsContext.Provider>
  )
}
