import React from "react"

import { RadioGroup, Radio } from "../../radioGroup"
import Typography from "../../typography/Typography"
import Icon from "../../icon"

const IconRadioButtonField = (props) => {
  const { label, onChange, radioClassName, value, required, options, ...rest } =
    props

  return (
    <RadioGroup required={required} label={label} value={value} {...rest}>
      <div className="flex flex-wrap  gap-x-6 ">
        {options?.map((item) => (
          <div className="relative">
            {/* <Radio
              checked={field?.value === item?.value}
              value={item?.value}
              key={item?.value}
              name={item?.value}
              className={"absolute bottom-2 left-2"}
              onChange={() => {
                onChange && onChange(item?.value)
                setValue(item?.value)
              }}
              absolute bottom-0 left-0 flex h-[16px] w-[16px] cursor-pointer items-center justify-center rounded-full border-2
            /> */}

            {/* <div
              key={item?.value}
              className={`cursor-pointer items-center justify-center rounded-full border-2 ${
                value === item?.value
                  ? "border-primary-500 bg-primary-500"
                  : "border-gray-300 bg-white"
              } z-10  `}
              onClick={() => {
                onChange && onChange(item?.value)
              }}
            >
              <Typography className="mx-4">{item?.label}</Typography>
              <Icon icon="check" variant="white" size="xxxs" />
            </div> */}
            <div className="flex justify-center">
              <div
                key={item?.value}
                className={`h-[16px] w-[16px] rounded-full border-2 ${
                  value === item?.value
                    ? "border-primary-500 bg-primary-500"
                    : "border-gray-300 bg-white"
                } z-10  `}
                onClick={() => {
                  onChange && onChange(item?.value)
                }}
              ></div>
              <Typography className="mx-2">{item?.label}</Typography>
            </div>
          </div>
        ))}
      </div>
    </RadioGroup>
  )
}

export default IconRadioButtonField
