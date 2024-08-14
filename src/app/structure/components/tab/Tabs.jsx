import React from "react";

const Tabs = (props) => {
  const { children, className, ...rest } = props;
  return (
    <ul
      className={`${
        className ? className : ""
      } relative flex flex-wrap p-1 list-none rounded-xl gap-x-1 gap-y-3 bg-grey-50 lg:gap-x-3`}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default Tabs;
