import React from "react";

const Popper = (props) => {
  const { children, className, open, ...rest } = props;

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } absolute left-0 top-full z-10 rounded-lg border border-gray-200 bg-white p-2 text-text-primary shadow-sm transition-opacity duration-300 ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Popper;
