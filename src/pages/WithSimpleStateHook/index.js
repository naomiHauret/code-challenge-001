import { ASC, DESC, sortArrayOfObjects } from "utils/sortArrayOfObjects"
import React, { useState, useEffect, Fragment } from "react"
import ListCards from "components/ListCards"
import Container from "components/Container"

const WithSimpleStateHook = () => {
  const [data, setData] = useState({ restaurants: [] })
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(false)
  const [sort, setSort] = useState(false)

  const sortAsc = () => {
    data.restaurants = sortArrayOfObjects(data.restaurants, "name", ASC)
    setSort("asc")
  }

  const sortDesc = () => {
    data.restaurants = sortArrayOfObjects(data.restaurants, "name", DESC)
    setSort("desc")
  }

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setLoading(true)
      try {
        const result = await fetch("public/data.json", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })

        setData(await result.json())
      } catch (error) {
        setIsError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <Fragment>
      <Container contained={true}>
        <ListCards
          sort={sort}
          sortAsc={sortAsc}
          sortDesc={sortDesc}
          loading={isLoading}
          error={hasError}
          list={data.restaurants}
        />
      </Container>
    </Fragment>
  )
}

export default WithSimpleStateHook
