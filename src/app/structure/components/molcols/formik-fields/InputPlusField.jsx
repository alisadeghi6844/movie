import React from "react";

import { useField } from "formik";

import InputPlus from "../../input/inputPlus";

const InputPlusField = (props) => {
  const { label, required, ...rest } = props;
  const [field, { error }, { setValue }] = useField(rest);

  return (
    <InputPlus
      errorMessage={error}
      required={required}
      label={label}
      {...field}
      onChange={(e) => {
        setValue(e);
      }}
      {...rest}
    />
  );
};

export default InputPlusField;
