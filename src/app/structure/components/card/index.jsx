import React from "react";

const Card = (props) => {
  const {
    bg,
    className,
    children,
    shadow = true,
    size = "auto",
    ...rest
  } = props;
  return (
    <div
      className={`h-auto rounded-lg ${bg && bg} ${shadow ? "shadow-lg" : ""} ${
        {
          auto: "w-full",
          xs: "w-44",
          sm: "w-52",
          md: "w-60",
          lg: "w-72",
          xl: "w-96",
        }[size]
      } ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
