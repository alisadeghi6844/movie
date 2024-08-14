import React from "react";

function Container(props) {
  const { width, children } = props;
  return (
    <div className={`max-w-screen-2xl lg:max-w-screen-xl mx-auto`}>
      {children}
    </div>
  );
}

export default Container;
