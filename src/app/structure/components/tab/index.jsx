import React from "react";

import Icon from "../icon";

const Tab = (props) => {
  const { children, className, index, icon, setValue, value, ...rest } = props;

  const handleClickTab = () => {
    setValue(index);
  };

  return (
    <li
      onClick={handleClickTab}
      className={`${
        index == value
          ? "shadow-[0_1px_5px_1px_rgb(221,221,221)] bg-white text-grey-800 scale-105"
          : null
      } z-20 flex items-center cursor-pointer py-1 px-2 mb-0 transition-all border-0 rounded-lg ease-in-out bg-inherit text-grey-600 text-xs lg:px-3 lg:text-md ${
        className ? className : ""
      }`}
      {...rest}
    >
      {icon ? <Icon name={icon} size="xl" className="ml-2" /> : null}
      {children}
    </li>
  );
};

export default Tab;
