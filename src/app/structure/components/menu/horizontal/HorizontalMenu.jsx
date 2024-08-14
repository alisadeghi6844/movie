import React from "react";
import { useSelector } from "react-redux";
const HorizontalMenu = (props) => {
  const { children, collapsable, className, topMenu, ...rest } = props;

  const { settingDarkModeStatus } = useSelector((state) => state.setting);
  return (
    <ul
      className={`${className ? className : ""} ${
        collapsable ? "collapsable" : ""
      } ${topMenu ? "top-menu" : ""} horizontal-menu`}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default HorizontalMenu;
