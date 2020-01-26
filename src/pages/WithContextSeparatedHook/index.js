import React from "react"
import { RestaurantsProvider } from "contexts/RestaurantsWithStateHook"
import Consumer from "./Consumer"

const WithContextSeparatedHook = () => (
  <RestaurantsProvider>
    <Consumer />
  </RestaurantsProvider>
)

export default WithContextSeparatedHook
