import React from "react";
import { SwiperSlide } from "swiper/react";

const SliderItem = (props) => {
  const { className, children, ...rest } = props;
  return <SwiperSlide>{children}</SwiperSlide>;
};

export default SliderItem;
