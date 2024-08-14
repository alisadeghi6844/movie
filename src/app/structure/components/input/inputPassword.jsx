import React, { useState } from "react"
import Icon from "../icon"
import Input from "./index"

const InputPassword = ({
  name,
  errorMessage,
  onChange,
  passwordValue,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const showPasswordHandler = () => {
    setShowPassword((p) => !p)
  }

  return (
    <label htmlFor={name} className="relative block">
      <Input
        name={name}
        required
        onChange={onChange}
        errorMessage={errorMessage}
        type={showPassword ? "text" : "password"}
        value={passwordValue}
        autoComplete="new-password"
        {...rest}
      />
      <Icon
        icon={showPassword ? "eye" : "eye_off"}
        className="absolute left-0 top-2 mt-2 cursor-pointer text-gray-500"
        onClick={showPasswordHandler}
        size="xs"
      />
    </label>
  )
}

export default InputPassword
