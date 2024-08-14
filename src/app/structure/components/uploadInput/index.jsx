import React, { useState } from "react";
import Typography from "../typography/Typography";
import Icon from "../icon";

const UploadInput = (props) => {
  const {
    errorMessage,
    helperText,
    label,
    value,
    required,
    startAdornment,
    onChange,
    isBase64 = false,
    ...rest
  } = props;

  const [fileLabel, setFileLabel] = useState();

  const handleChangeFileUpload = (e) => {
    onChange(e.target.files);
  };

  const handleChangeFileUploadBase64 = (e) => {
    setFileLabel(e?.target?.files[0]?.name);
    const reader = new FileReader();
    reader.onload = () => {
      onChange(reader.result);
    };
    reader.readAsDataURL(e?.target?.files[0]);
  };

  return (
    <div className="w-full">
      <label className="text-start text-text-primary">
        {label}
        {required && <span className="text-error-500">*</span>}
      </label>
      <div className="relative">
        <input
          className="hidden"
          type="file"
          id={label}
          accept="image/png, image/jpeg,image/jpg,.pdf"
          onChange={(e) => {
            isBase64
              ? handleChangeFileUploadBase64(e)
              : handleChangeFileUpload(e);
          }}
          {...rest}
        />
        <label
          className="block truncate p-2.5 h-11 w-full my-1 text-text-primary bg-background-paper rounded-lg shadow-md border focus:outline-none focus:border-primary-500 border-gray-300"
          htmlFor={label}
        >
          <div className="flex items-center gap-x-4 flex-wrap">
            {isBase64 ? (
              <p>{fileLabel}</p>
            ) : value ? (
              Object.values(value).map((item) => {
                return <div key={item.name}>{item.name}</div>;
              })
            ) : null}
          </div>
        </label>
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3 text-primary-500 font-extrabold">
          <Icon name="upload" size="xl" />
        </div>
      </div>
      <Typography
        className={`text-xs ${
          !!errorMessage ? "text-error-500 " : "text-text-secondary"
        }`}
      >
        {!!errorMessage ? errorMessage : helperText}
      </Typography>
    </div>
  );
};

export default UploadInput;
