import React, { useEffect } from "react";
import { useField } from "formik";
import UploadInput from "../../uploadInput";

const UploadInputField = (props) => {
  const { label, required, ...rest } = props;
  const [{ error }, { value }, { setValue }] = useField(rest);
  return (
    <UploadInput
      errorMessage={error}
      required={required}
      label={label}
      {...rest}
      onChange={(e) => {
        setValue(e);
      }}
      value={value}
    />
  );
};

export default UploadInputField;
