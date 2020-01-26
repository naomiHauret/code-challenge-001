import React from "react"
import { RestaurantsWithReducerProvider } from "contexts/RestaurantsWithReducerHook"
import Consumer from "./Consumer"

const WithReducer = () => (
  <RestaurantsWithReducerProvider>
    <Consumer />
  </RestaurantsWithReducerProvider>
)

export default WithReducer
