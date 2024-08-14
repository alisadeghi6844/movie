import React from "react";

import { useField } from "formik";

import Switch from "../../switch";

const SwitchField = (props) => {
  const { label, required, ...rest } = props;
  const [field, { error }, { setValue }] = useField(rest);
  return (
    <>
      <Switch
        errorMessage={error}
        required={required}
        label={label}
        {...field}
        onChange={(e) => {
          setValue(e);
        }}
        {...rest}
      />
    </>
  );
};

export default SwitchField;
