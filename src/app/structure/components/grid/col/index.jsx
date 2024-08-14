import React from "react";

const Col = (props) => {
  const { className, col, children, xl, lg, md, sm, xs, ...rest } = props;
  return (
    <div
      className={`col-xs ${className ? className : ""} ${
        col ? `col-xs-${col}` : ""
      } ${lg ? `col-lg-${lg}` : ""} ${md ? `col-md-${md}` : ""} ${
        sm ? `col-sm-${sm}` : ""
      } ${xs ? `col-xs-${xs}` : ""} ${xl ? `col-xl-${xl}` : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Col;
