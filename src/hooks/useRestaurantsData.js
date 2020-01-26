import { useState, useEffect } from "react"
import { ASC, DESC, sortArrayOfObjects } from "utils/sortArrayOfObjects"

export function useRestaurantsData() {
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
  return {
    list: data.restaurants,
    loading: isLoading,
    error: hasError,
    sort: sort,
    sortAsc: sortAsc,
    sortDesc: sortDesc,
  }
}
