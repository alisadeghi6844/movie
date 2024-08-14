import React from "react";

const TreeMenu = (props) => {
  const { className, children, ...rest } = props;

  return (
    <ul className={`${className ? className : ""} tree-menu`} {...rest}>
      {children}
    </ul>
  );
};

export default TreeMenu;
