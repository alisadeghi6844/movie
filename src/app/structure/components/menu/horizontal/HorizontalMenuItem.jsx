import React from "react";
import Image from "../../image";
import Icon from "../../icon";
import Typography from "../../typography/Typography";
import { IconOptions } from "../../select/IconOptions";

const HorizontalMenuItem = (props) => {
  const { children, className, link, title, icon, ...rest } = props;
  return (
    <li
      className={`border border-gray-200 flex items-center transition-all group h-[44px] hover:bg-secondary-500 ${
        className && className
      }`}
      {...rest}
    >
      <Typography
        tag={link ? "a" : "span"}
        link={link && link}
        className="w-0 overflow-hidden transition-all group-hover:w-fit group-hover:px-4 group-hover:text-white "
      >
        {title}
      </Typography>
      <Typography
        tag={link ? "a" : "span"}
        link={link && link}
        className="flex cursor-pointer flex-col items-center group-hover:text-secondary-500 justify-center w-[44px] h-full rounded-lg transition-all group-hover:bg-white group-hover:border-secondary-500 group-hover:border-2"
      >
        {IconOptions.find((item) => item.value === icon) &&
          React.createElement(
            IconOptions.find((item) => item.value === icon).icon,
            {
              size: 24,
              className: "z-50 group-hover:text-secondary-500 text-gray-500",
            }
          )}
      </Typography>
    </li>
  );
};

export default HorizontalMenuItem;
