import React from "react"
import { useField } from "formik"
import SingleSelect from "../../select"

const InputField = (props) => {
  const { label, required, ...rest } = props
  const [field, { error }, { setValue }] = useField(rest)

  return (
    <SingleSelect
      errorMessage={error}
      required={required}
      label={label}
      {...rest}
      {...field}
      onChange={(e) => {
        setValue(e)
      }}
    />
  )
}

export default InputField
