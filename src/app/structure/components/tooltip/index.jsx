"use client"
import React, { useState, useRef } from "react";

const Tooltip = (props) => {
  const { children, className, title,position="top", ...rest } = props;
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const topStyle={
    top: `calc(-1 * ${height}px)`,
    right: "50%",
    transform: "translateX(50%)"
  };

  const bottomStyle={
    bottom: `calc(-1 * ${height}px)`,
    right: "50%",
    transform: "translateX(50%)"
  };

  const leftStyle={
    right: `calc(${height}px)`,
    top: `calc(-1/2*${height+3}px)`,
    transform: "translateY(50%)"
  };

  const rightStyle = {
    left: `calc(${height}px)`,
    top: `calc(-1/2*${height+3}px)`,
    transform: "translateY(50%)"
  }

  const handleGetHeight = () => {
    setHeight(ref.current.clientHeight);
  };

  const handleLeaveMouse = () => {
    setHeight(0);
  };

  return (
    <div
      className={`${
        className ? className : ""
      } relative inline-block cursor-pointer tooltip-wrapper`}
      {...rest}
      onMouseLeave={handleLeaveMouse}
      onMouseEnter={handleGetHeight}
    >
      {children}
      <div
        ref={ref}
        style={position === "top" ? topStyle :
      position === "bottom" ? bottomStyle:
    position === "right" ? rightStyle :
  position === "left" ? leftStyle : "" }
        className={`tooltip-content ${position} rounded-lg w-auto h-auto bg-gray-800 text-white absolute px-2 py-1 justify-center items-center flex-col text-xs min-w-max z-10 `}
      >
        {title}
      </div>
    </div>
  );
};

export default Tooltip;
