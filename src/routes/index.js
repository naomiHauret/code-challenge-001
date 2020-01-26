import React, { lazy } from "react"

const WithSimpleStateHook = lazy(() => import("./../pages/WithSimpleStateHook"))
const WithSimpleStateSeparatedHook = lazy(() => import("./../pages/WithSimpleStateSeparatedHook"))
const WithReducer = lazy(() => import("./../pages/WithReducer"))
const WithContextSeparatedHook = lazy(() => import("./../pages/WithContextSeparatedHook"))
const Home = lazy(() => import("./../pages/Home"))
export default [
  {
    path: "/",
    name: "Home",
    component: <Home />,
  },
  {
    path: "/with-simple-state-hook",
    name: "With Simple State Hook",
    component: <WithSimpleStateHook />,
  },
  {
    path: "/with-simple-state-separated-hook",
    name: "With Simple State and Separated Hook",
    component: <WithSimpleStateSeparatedHook />,
  },
  {
    path: "/with-context-separated-hook",
    name: "With Context API and Separated Hook",
    component: <WithContextSeparatedHook />,
  },
  {
    path: "/with-reducer-hook",
    name: "With Context API and Reducer Hook",
    component: <WithReducer />,
  },
]
