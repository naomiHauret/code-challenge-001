import React, { Fragment } from "react"
import Button from "components/Button"
import CardRestaurant from "components/CardRestaurant"
import styles from "./index.module.css"

const ListCards = (props) => {
  const { list, loading, error, sort, sortAsc, sortDesc } = props

  return (
    <Fragment>
      {error && <div>Something went wrong ...</div>}
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <Fragment>
          <div className="flex pb-30 justify-end">
            <Button additionalStyles={`mr-20 ${sort === "asc" && styles.buttonSelected}`} onClick={sortAsc}>
              <svg
                aria-hidden="true"
                className="w-25"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M120.44 35.51a11.94 11.94 0 0 0-16.87 0l-84 82.32a12 12 0 0 0-.09 17l5.61 5.68a11.93 11.93 0 0 0 16.91.09l54-52.74V472a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V88.08l53.94 52.35a12 12 0 0 0 16.92 0l5.64-5.66a12 12 0 0 0 0-17zm326.85 172.43l-59.76-168A11.87 11.87 0 0 0 376.37 32h-16.74a11.87 11.87 0 0 0-11.16 7.94l-59.76 168A12 12 0 0 0 299.88 224H311a11.86 11.86 0 0 0 11.21-8.09l15.1-44.27h60.85L413.5 216a11.88 11.88 0 0 0 11.2 8h11.42a12 12 0 0 0 11.17-16.06zm-99.9-67.36s19.62-56.87 20.5-60c.87 3.14 20.24 60 20.24 60zM432 288H304a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8l87.68.07-92.76 131.79a16 16 0 0 0-2.92 9.21V472a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-87.81l92.89-131.86a16 16 0 0 0 2.92-9.21V296a8 8 0 0 0-8-8z"
                ></path>
              </svg>
            </Button>
            <Button additionalStyles={`${sort === "desc" && styles.buttonSelected}`} onClick={sortDesc}>
              <svg
                aria-hidden="true"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-25"
              >
                <path
                  fill="currentColor"
                  d="M432 288H304a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8l87.68.07-92.76 131.79a16 16 0 0 0-2.92 9.21V472a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-87.81l92.89-131.86a16 16 0 0 0 2.92-9.21V296a8 8 0 0 0-8-8zm15.29-80.06l-59.76-168A11.87 11.87 0 0 0 376.37 32h-16.74a11.87 11.87 0 0 0-11.16 7.94l-59.76 168A12 12 0 0 0 299.88 224H311a11.86 11.86 0 0 0 11.21-8.09l15.1-44.27h60.85L413.5 216a11.88 11.88 0 0 0 11.2 8h11.42a12 12 0 0 0 11.17-16.06zm-99.9-67.36s19.62-56.87 20.5-60c.87 3.14 20.24 60 20.24 60zm-148.46 231a11.93 11.93 0 0 0-16.91-.09l-54 52.67V40a8 8 0 0 0-8-8H104a8 8 0 0 0-8 8v383.92l-53.94-52.35a12 12 0 0 0-16.92 0l-5.64 5.66a12 12 0 0 0 0 17l84.06 82.3a11.94 11.94 0 0 0 16.87 0l84-82.32a12 12 0 0 0 .09-17z"
                ></path>
              </svg>
            </Button>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-30">
            {list.map((restaurant, i) => (
              <li key={i}>
                <CardRestaurant data={restaurant} />
              </li>
            ))}
          </ul>
        </Fragment>
      )}
    </Fragment>
  )
}

export default ListCards
