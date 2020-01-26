import React, { memo } from "react"

const Button = memo((props) => {
  const { children, additionalStyles, tagType } = props
  const ButtonTag = tagType
  const buttonProps = {}
  Object.keys(props)
    .filter((prop) => ["additionalStyles", "tagType"].includes(prop) === false)
    .map((p) => (buttonProps[p] = props[p]))

  return (
    <ButtonTag
      className={`font-bold md:transition-background md:cursor-pointer md:transition-opacity rounded-4 text-blue border-blue border-2 border-solid px-20 py-10 flex text-center bg-white-100 text-black-100 ${additionalStyles}
            ${tagType === "a" ? `no-underline ${styles.buttonLink}` : ""}
        `}
      {...buttonProps}
    >
      {children}
    </ButtonTag>
  )
})

Button.defaultProps = {
  tagType: "button",
}

export default Button
