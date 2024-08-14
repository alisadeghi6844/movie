import React from "react";
import Image from "../image";

const CardMedia = (props) => {
  const { alt, avatar, className, children, imageClassName, src, ...rest } =
    props;
  return (
    <div className={`${className ? className : ""}`} {...rest}>
      <Image
        src={src}
        alt={alt}
        className={`w-full h-auto ${imageClassName ? imageClassName : ""}`}
      />
      <div>{avatar && avatar}</div>
      {children}
    </div>
  );
};

export default CardMedia;
