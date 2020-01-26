import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import Container from "components/Container"
import routes from "routes"
const Home = () => (
  <Fragment>
    <Container staticStyles="text-center mt-100" contained={true}>
      <h1 className="text-48 mb-30">One page, one exercice, many way to render things.</h1>
      <p className="text-24 text-gray-400">
        {" "}
        Hooks, with or without Context API, multiple architecture... In the end, you get the same result. Visually, you
        won't see any difference, it's all in the code code.
      </p>
      <nav>
        <ul className="mt-30 flex flex-wrap justify-center">
          {routes.map(
            (route, i) =>
              route.path !== "/" && (
                <li className={`${i < routes.length && "mb-30 md:mb-0 mr-20"}`} key={route.path}>
                  <Link
                    className={`block w-full h-full text-blue-100 text-underline hover:text-no-unce`}
                    to={route.path}
                  >
                    {route.name}
                  </Link>
                </li>
              ),
          )}
        </ul>
      </nav>
    </Container>
  </Fragment>
)

export default Home
