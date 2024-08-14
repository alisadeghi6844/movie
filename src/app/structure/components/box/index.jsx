import React from "react";

const Box = (props) => {
  const { children,bg, className, ...rest } = props;
  return (
    <div
      className={` relative flex flex-col min-w-0 break-words ${bg?bg:"bg-white"} shadow-lg rounded-2xl bg-clip-border ${
        className ?? ""
      }`}
      {...rest}
    >
      {children ?? null}
    </div>
  );
};

export default Box;
