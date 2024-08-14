import React from "react";
import { useField } from "formik";
import Input from "../../input";

const InputField = (props) => {
  const { label, required, ...rest } = props;
  const [field, { error }] = useField(rest);
  return (
    <Input
      errorMessage={error}
      required={required}
      label={label}
      {...field}
      {...rest}
    />
  );
};

export default InputField;
