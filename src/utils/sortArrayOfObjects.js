export const ASC = "ascending"
export const DESC = "descending"

export function sortArrayOfObjects(array, key, order) {
  if (order === ASC) return array.sort((obj1, obj2) => (obj1[key] > obj2[key] ? 1 : -1))
  if (order === DESC) return array.sort((obj1, obj2) => (obj1.name < obj2.name ? 1 : -1))
}
