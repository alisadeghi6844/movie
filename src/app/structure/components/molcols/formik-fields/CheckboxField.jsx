import React from "react"
import Checkbox from "../../checkBox"
import { useField } from "formik"

const CheckboxField = (props) => {
  const { label, required, ...rest } = props
  const [field, { error }, { setValue }] = useField(rest)
  return (
    <>
      <Checkbox
        errorMessage={error}
        required={required}
        label={label}
        {...field}
        onChange={(e) => {
          setValue(e)
        }}
        {...rest}
      />
    </>
  )
}

export default CheckboxField
