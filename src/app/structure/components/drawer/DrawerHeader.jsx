import React from "react";

const DrawerHeader = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={`z-40 w-full px-3 py-4 absolute top-0 right-0 ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default DrawerHeader;
