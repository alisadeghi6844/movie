import { useId, useRef } from "react";

import Button from "../button";
import Avatar from "../avatar";
import Typography from "../typography/Typography";

const UploadImage = (props) => {
  const {
    errorMessage,
    helperText,
    label,
    value,
    required,
    disabled,
    onChange: handleChange,
    ...rest
  } = props;

  const inputRef = useRef(null);
  const id = useId();

  const onChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      handleChange(reader.result);
    };
    reader.readAsDataURL(e?.target?.files[0]);
  };

  const handleImgReset = () => {
    handleChange("");
  };

  return (
    <div className="w-full">
      <label className="text-start text-text-primary">
        {label}
        {required && <span className="text-error-500">*</span>}
      </label>
      <div className="flex items-center mt-1">
        <div className="min-w-fit ml-5">
          <Avatar
            size="xl"
            alt="icon"
            className="object-cover h-20 rounded-full"
            img={!!value ? value : "/images/fake.jpg"}
          />
          <label htmlFor={id}>
            <input
              id={id}
              multiple
              type="file"
              accept="image/*"
              onChange={onChange}
              ref={inputRef}
              disabled={disabled}
              className="hidden"
              {...rest}
            />
          </label>
        </div>
        <Button
          variant="primary"
          size="sm"
          className="ml-2"
          onClick={() => {
            inputRef.current.click();
          }}
          type="button"
        >
          انتخاب
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline-error"
          onClick={handleImgReset}
        >
          حذف
        </Button>
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

export default UploadImage;
