import React, { useContext } from "react"
import ListCards from "components/ListCards"
import { RestaurantsContext } from "contexts/RestaurantsWithStateHook"
import Container from "components/Container"

const Consumer = () => {
  const { list, error, loading, sort, sortAsc, sortDesc } = useContext(RestaurantsContext)
  return (
    <Container contained={true}>
      <ListCards sort={sort} sortAsc={sortAsc} sortDesc={sortDesc} loading={loading} error={error} list={list} />
    </Container>
  )
}

export default Consumer
