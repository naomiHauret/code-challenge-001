import React from "react"
import ListCards from "components/ListCards"
import Container from "components/Container"

import { useRestaurantsData } from "hooks/useRestaurantsData"

const WithSimpleStateSeparatedHook = () => {
  const { loading, error, list, sort, sortAsc, sortDesc } = useRestaurantsData()
  return (
    <Container contained={true}>
      <ListCards sort={sort} sortDesc={sortDesc} sortAsc={sortAsc} loading={loading} error={error} list={list} />
    </Container>
  )
}

export default WithSimpleStateSeparatedHook
