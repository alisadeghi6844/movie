import React from "react"

import Icon from "../../icon"
import InputField from "./InputField"

const SearchInputField = (props) => {
  return (
    <InputField
      leftAdornment={<Icon icon="search" size="xs" />}
      className="h-full border-none"
      {...props}
    />
  )
}

export default SearchInputField
