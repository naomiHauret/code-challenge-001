import React, { Fragment, useContext } from "react"
import ListCards from "components/ListCards"
import { RestaurantsWithReducerContext } from "contexts/RestaurantsWithReducerHook"
import Container from "components/Container"

const Consumer = () => {
  const { list, error, loading, sortAsc, sortDesc, sort } = useContext(RestaurantsWithReducerContext)
  return (
    <Fragment>
      <Container contained={true}>
        <ListCards loading={loading} error={error} list={list} sort={sort} sortAsc={sortAsc} sortDesc={sortDesc} />
      </Container>
    </Fragment>
  )
}

export default Consumer
