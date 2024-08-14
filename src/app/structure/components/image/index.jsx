"use client"
import React from "react";

const Image = (props) => {
  const {
    alt,
    className,
    height,
    notImage = "default",
    src,
    width,
    ...rest
  } = props;
  return (
    <>
      <img
        src={src ? src : notImage}
        alt={alt ? alt : "image"}
        className={className ? className : ""}
        width={width && width}
        height={height && height}
        {...rest}
      />
    </>
  );
};
export default Image;
