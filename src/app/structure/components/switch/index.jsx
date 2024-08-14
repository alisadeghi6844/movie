import Typography from "../typography/Typography";

const Switch = (props) => {
  const {
    errorMessage,
    id,
    helperText,
    label,
    onChange: handleChange,
    required,
    value,
    ...rest
  } = props;

  return (
    <div className="flex">
      <div>
        <label className="cursor-pointer inline-flex relative items-center ">
          <input
            checked={value}
            className="sr-only peer"
            id={id}
            onChange={(e) => {
              handleChange(e.target.checked);
            }}
            type="checkbox"
            {...rest}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
        </label>
      </div>
      <div className="mr-2">
        <label for={id} className="text-start text-text-primary">
          {label}
          {required && <span className="text-error-500 ">*</span>}
        </label>
        <Typography
          className={`text-xs ${
            !!errorMessage ? "text-error-500 " : "text-text-secondary"
          }`}
        >
          {errorMessage ?? helperText}
        </Typography>
      </div>
    </div>
  );
};
export default Switch;
