import React from "react";

const CardFooter = (props) => {
  const { action, bg, children, className, icons, ...rest } = props;
  return (
    <div
      className={`p-3 rounded-b-lg ${bg && bg} ${className ? className : ""}`}
      {...rest}
    >
      <div className="flex items-center justify-between">
        <div>{icons}</div>
        <div>{action}</div>
      </div>
      {children}
    </div>
  );
};

export default CardFooter;
