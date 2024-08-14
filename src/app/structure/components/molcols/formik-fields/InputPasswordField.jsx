import React, { useState } from "react"
import { useField } from "formik"
import Input from "../../input/index"
import Icon from "../../icon"
import { useFormikContext } from "formik"

const InputPasswordField = (props) => {
  const { label, required, ...rest } = props

  const [field, { error }] = useField(rest)
  const { setFieldTouched, touched } = useFormikContext()

  const [showPassword, setShowPassword] = useState(false)
  const showPasswordHandler = () => {
    setShowPassword((p) => !p)
  }

  return (
    <label htmlFor={field.name} className="relative block">
      <Input
        errorMessage={touched[field.name] && error}
        required={required}
        label={label}
        type={showPassword ? "text" : "password"}
        value={field?.value ? field?.value : ""}
        onBlur={() => setFieldTouched(field.name)}
        {...rest}
        {...field}
      />
      <Icon
        name={showPassword ? "eye-slash" : "eye"}
        className="absolute right-[85%] top-[15px] mr-2 cursor-pointer text-gray-500"
        onClick={showPasswordHandler}
      />
    </label>
  )
}

export default InputPasswordField
