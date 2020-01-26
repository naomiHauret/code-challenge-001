import React from "react"

const CardRestaurant = (props) => {
  const { data } = props
  return (
    <figure
      className={`relative rounded-4 h-full border-2 border-gray-100 bg-white-100 border-solid flex flex-col ${!data.online &&
        "opacity-50"}`}
    >
      <img
        className="block w-full h-200 object-cover bg-gray-100"
        src={data.image}
        alt={`${data.name} restaurant picture`}
      />
      <figcaption className="px-20 pb-40 flex flex-col flex-grow">
        <h2 className="mt-20 mb-30 text-black-100 text-20 md:text-24 min-h-55">{data.name}</h2>
        <p className="mb-20 flex-grow text-gray-400 text-18">{data.description}</p>
        <aside>
          <ul className="flex text-14 md:text-12 text-gray-300">
            {data.tags.map((tag, i) => (
              <li key={i} className={`${i < data.tags.length - 1 && "mr-10"}`}>
                {tag}
              </li>
            ))}
          </ul>
        </aside>
      </figcaption>
    </figure>
  )
}

export default CardRestaurant
