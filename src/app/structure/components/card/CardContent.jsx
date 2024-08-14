import React from "react";

const CardContent = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={`${className ? className : ""}`} {...rest}>
      {children}
    </div>
  );
};

export default CardContent;
