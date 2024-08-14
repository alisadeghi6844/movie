import React from "react"

import Box from "../box"
import Typography from "../typography/Typography"
import Button from "../button"

const PageNumberSelect = (props) => {
  const { defaultValue, onChange } = props
  const arr = [
    { label: "10", value: 10 },
    { label: "20", value: 20 },
    { label: "30", value: 30 },
    { label: "40", value: 40 },
    { label: "50", value: 50 },
    { label: "60", value: 60 },
  ]

  return (
    <Box className="inline-block w-[150px] rounded-lg p-4 shadow-lg">
      <Typography>چیدمان نمایش</Typography>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {arr.map(({ value, label }) => (
          <Button
            key={value}
            size="xs"
            variant={value === defaultValue ? "primary" : "cancel"}
            className=" hover:bg-primary-500 hover:text-white"
            onClick={() => {
              onChange(value)
            }}
          >
            {label}
          </Button>
        ))}
      </div>
    </Box>
  )
}

export default PageNumberSelect
