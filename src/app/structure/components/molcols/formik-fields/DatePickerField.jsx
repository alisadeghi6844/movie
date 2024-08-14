import React from "react"
import { useField } from "formik"
import JalaliDatepicker from "../../jalaliDatepicker"

const DatePickerField = (props) => {
  const { label, required, onChange, ...rest } = props
  const [{ value }, { error }, { setValue }] = useField(rest)

  return (
    <JalaliDatepicker
      errorMessage={error}
      required={required}
      label={label}
      onChange={(e) => {
        onChange && onChange(e)
        setValue(e)
      }}
      value={value}
      {...rest}
    />
  )
}

export default DatePickerField
