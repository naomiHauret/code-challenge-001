import { ASC, DESC, sortArrayOfObjects } from "utils/sortArrayOfObjects"
// INITIAL STATE
export const initialState = {
  data: {
    restaurants: [],
  },
  hasError: false,
  isLoading: false,
  sort: false,
}

// TYPES
export const actions = {
  INIT: "restaurants/FETCH_INIT",
  FAILURE: "restaurants/FETCH_FAILURE",
  SUCCESS: "restaurants/FETCH_SUCCESS",
  ORDER_ASC: "restaurants/ORDER_ASC",
  ORDER_DESC: "restaurants/ORDER_DESC",
}

// REDUCER
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.INIT:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    case actions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        data: action.payload,
      }
    case actions.FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      }

    case actions.ORDER_ASC:
      return {
        ...state,
        sort: "asc",
        data: {
          restaurants: sortArrayOfObjects(state.data.restaurants, "name", ASC),
        },
      }

    case actions.ORDER_DESC:
      return {
        ...state,
        sort: "desc",
        data: {
          restaurants: sortArrayOfObjects(state.data.restaurants, "name", DESC),
        },
      }
    default:
      throw new Error()
  }
}
