import React from "react"

import { useField } from "formik"

import { RadioGroup, Radio } from "../../radioGroup"
import Typography from "../../typography/Typography"

const RadioButtonField = (props) => {
  const { label, required, options, ...rest } = props
  const [field, { error }, { setValue }] = useField(rest)

  return (
    <RadioGroup
      errorMessage={error}
      required={required}
      label={label}
      {...rest}
    >
      <div container="null" className="wrap flex flex-wrap justify-start">
        {options?.map((item) => (
          <Radio
            checked={field?.value === item?.value}
            value={item?.value}
            key={item?.value}
            name={item?.value}
            onChange={() => {
              setValue(item?.value)
            }}
          >
            <Typography>{item?.label}</Typography>
          </Radio>
        ))}
      </div>
    </RadioGroup>
  )
}

export default RadioButtonField
