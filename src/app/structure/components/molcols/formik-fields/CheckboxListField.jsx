import React from "react";

import { useField } from "formik";

import Checkbox from "../../checkBox/Checkbox";
import CheckboxList from "../../checkBox/CheckboxList";

const CheckboxListField = (props) => {
  const { label, required, options, ...rest } = props;
  const [field, { error }, { setValue }] = useField(rest);

  return (
    <CheckboxList
      errorMessage={error}
      required={required}
      label={label}
      {...rest}
    >
      <div container="null" className="flex flex-col gap-1">
        {options?.map((item) => (
          <Checkbox
            checked={
              field?.value
                ? field?.value?.find((i) => i === item?.value)
                : false
            }
            value={
              field?.value
                ? field?.value?.find((i) => i === item?.value)
                : false
            }
            label={item?.label}
            onChange={(e) => {
              if (e) {
                setValue([...field?.value, item?.value]);
              } else {
                setValue(field?.value.filter((i) => i !== item?.value));
              }
            }}
          />
        ))}
      </div>
    </CheckboxList>
  );
};

export default CheckboxListField;
