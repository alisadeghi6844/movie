import Typography from "../typography/Typography";
import React from "react";

const TextArea = (props) => {
  const {
    errorMessage,
    helperText,
    label,
    placeholder,
    required,
    rows,
    ...rest
  } = props;

  return (
    <div className="w-full">
      <label htmlFor={label} className="text-start text-text-primary">
        {label}
        {required && <span className="text-error-500">*</span>}
      </label>
      <textarea
        id={label}
        className={` p-2.5 w-full my-1 text-text-primary bg-background-paper rounded-lg  shadow-md border focus:outline-none  focus:border-primary-main ${
          !!errorMessage
            ? "text-error-500  focus:text-error-500 "
            : "border-gray-300"
        } `}
        rows={rows ?? 4}
        placeholder={placeholder ?? "متن خود را این جا وارد کنید..."}
        {...rest}
      />
      <Typography
        className={`text-xs  ${
          !!errorMessage ? "text-error-500 " : "text-text-secondary"
        }`}
      >
        {errorMessage ?? helperText}
      </Typography>
    </div>
  );
};

export default TextArea;
