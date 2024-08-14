import React from "react";

const CardHeader = (props) => {
  const { action, avatar, bg, children, className, ...rest } = props;
  return (
    <div
      className={`p-3 ${bg && bg} rounded-t-lg ${className ? className : ""}`}
      {...rest}
    >
      <div className="flex items-center justify-between">
        <div>{avatar && avatar}</div>
        <div>{action && action}</div>
      </div>
      {children && children}
    </div>
  );
};

export default CardHeader;
