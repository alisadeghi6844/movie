import React from "react";
import { useSelector } from "react-redux";
const VerticalMenu = (props) => {
  const { className, children, ...rest } = props;
  const { settingDarkModeStatus } = useSelector((state) => state.setting);

  return (
    <ul
      className={`${className ? className : ""} ${
        settingDarkModeStatus === "dark" ? "vertical-menu-dark" : ""
      } vertical-menu`}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default VerticalMenu;
