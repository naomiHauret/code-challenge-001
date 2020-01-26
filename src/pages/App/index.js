import React, { Fragment, Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import routes from "routes"

const App = () => (
  <Fragment>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact>
              {route.component}
            </Route>
          ))}
        </Switch>
      </Router>
    </Suspense>
  </Fragment>
)

export default App
