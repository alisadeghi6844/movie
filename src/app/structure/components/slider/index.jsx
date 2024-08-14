import React from "react";
import { Swiper } from "swiper/react";

const Slider = (props) => {
  const { children, className, ...rest } = props;
  return (
    <Swiper className={`${className ?? " "} mySwiper`} {...rest}>
      {children}
    </Swiper>
  );
};

export default Slider;
