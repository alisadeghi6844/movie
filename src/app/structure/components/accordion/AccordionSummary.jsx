import React, { useEffect, useState } from "react";
import Icon from "../icon";
import Typography from "../typography/Typography";

const AccordionSummary = (props) => {
  const {
    children,
    className,
    icon,
    moreText,
    iconClassName,
    open,
    title,
    ...rest
  } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    }
  }, []);

  return (
    <>
      <div
        onClick={() => setIsVisible((prevState) => !prevState)}
        className={`cursor-pointer w-full relative rounded p-3 flex items-center focus:ring-4 focus:ring-gray-200 transition hover:bg-primary-200 ${
          className ? className : ""
        } ${isVisible ? "bg-primary-200 text-primary-500 rounded-b-none" : ""} `}
        {...rest}
      >
        <div className="flex items-center justify-between w-full pl-10 gap-x-4">
          <div className="flex items-center flex-1">
            {!!icon ? (
              <Icon
                name={icon}
                className={`ml-2 text-primary-500 ${
                  iconClassName && iconClassName
                }`}
                size="xl"
              />
            ) : null}
            {title}
          </div>
          <Typography>{moreText ?? null}</Typography>
        </div>
        <Typography
          tag="span"
          className={`absolute left-5 transition-all text-primary-500 ${
            isVisible ? "rotate-180" : ""
          }`}
        >
          <Icon name="chevron-down" size="lg" />
        </Typography>
      </div>
      {isVisible ? children : null}
    </>
  );
};

export default AccordionSummary;
