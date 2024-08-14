import React from "react";

const DrawerContent = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`my-20 relative h-full overflow-y-auto overflow-x-hidden ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default DrawerContent;
