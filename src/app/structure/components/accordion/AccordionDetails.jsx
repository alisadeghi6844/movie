import React from "react";

const AccordionDetails = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div className={`p-5 ${className ? className : ""}`} {...rest}>
      {children}
    </div>
  );
};

export default AccordionDetails;
