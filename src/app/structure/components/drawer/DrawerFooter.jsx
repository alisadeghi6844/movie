import React from "react";

const DrawerFooter = (props) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={`z-40 w-full px-3 py-4 border-t absolute bottom-0 right-0 ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default DrawerFooter;
