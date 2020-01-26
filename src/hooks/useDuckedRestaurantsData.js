import { useReducer, useEffect } from "react"
import { initialState, actions, reducer } from "reducers/Restaurants"

export function useDuckedRestaurantsData() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: actions.INIT })
      try {
        const result = await fetch("public/data.json", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        dispatch({
          type: actions.SUCCESS,
          payload: await result.json(),
        })
      } catch (error) {
        dispatch({ type: actions.FAILURE })
      }
    }
    fetchData()
  }, [])
  return {
    list: state.data.restaurants,
    loading: state.isLoading,
    error: state.hasError,
    sort: state.sort,
    sortAsc: () => dispatch({ type: actions.ORDER_ASC }),
    sortDesc: () => dispatch({ type: actions.ORDER_DESC }),
  }
}
