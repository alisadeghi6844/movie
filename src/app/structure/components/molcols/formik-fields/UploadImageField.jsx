import React from "react";
import { useField } from "formik";

import UploadImage from "../../uploadInput/UploadImage";

const UploadImageField = ({ ...props }) => {
  const [field, { error }, { setValue }] = useField(props);

  return (
    <UploadImage
      {...field}
      {...props}
      onChange={(img) => {
        setValue(img);
      }}
      errorMessage={error}
    />
  );
};

export default UploadImageField;
