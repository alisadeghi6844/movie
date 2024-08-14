import React from "react";

const TabPanel = (props) => {
  const { className, children, index, value, ...rest } = props;
  return (
    <>
      {value == index ? (
        <div
          className={` py-2 w-full rounded-lg mt-4 lg:py-4 ${
            className ? className : ""
          }`}
          {...rest}
        >
          {children}
        </div>
      ) : null}
    </>
  );
};

export default TabPanel;
