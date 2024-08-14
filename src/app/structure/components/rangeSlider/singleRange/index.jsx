import React from "react";
import Typography from "../../typography/Typography";

const SingleRange = (props) => {
  const {
    label,
    required,
    errorMessage,
    helperText,
    min = 0,
    max = 100,
    className,
    ...rest
  } = props;

  return (
    <div className="w-full">
      <label className="text-start text-text-primary">
        {label}
        {required && <span className="text-error-500">*</span>}
      </label>{" "}
      <input
        min={min}
        max={max}
        type="range"
        className={`
            form-range
            w-full
            h-6
            p-0
            bg-transparent
            focus:outline-none focus:ring-0 focus:shadow-none ${className ?? ""}
            `}
        {...rest}
      />
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

export default SingleRange;
