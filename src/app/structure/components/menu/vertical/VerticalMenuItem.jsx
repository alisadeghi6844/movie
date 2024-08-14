import React, { useEffect, useState } from "react";
import Typography from "../../typography/Typography";
import { IconOptions } from "../../select/IconOptions";
import { FaChevronLeft } from "react-icons/fa6";

const VerticalMenuItem = (props) => {
  const {
    children,
    className,
    collapsable,
    link,
    title,
    isClose,
    icon,
    sidebarStatus,
    ...rest
  } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (collapsable) {
      setIsVisible(true);
    }
  }, []);

  const handleOpenMenu = (e) => {
    e.stopPropagation();
    setTimeout(() => {
      setIsVisible(true);
    }, 120);
  };
  const handleCloseMenu = (e) => {
    e.stopPropagation();
    setTimeout(() => {
      setIsVisible(false);
    }, 120);
  };
  useEffect(() => {
    if (sidebarStatus === "default") {
      setTimeout(() => {
        setIsVisible(false);
      }, 120);
    }
  }, [sidebarStatus]);
  return (
    <>
      {sidebarStatus === "action" ? (
        <>
          <li
            onMouseEnter={(e) => handleOpenMenu(e)}
            onMouseLeave={(e) => handleCloseMenu(e)}
            className={`verticalMenuItem my-2 ${className ? className : ""} 
            ${isVisible ? "open" : ""}
            `}
            {...rest}
          >
            <Typography
              tag={link ? "a" : "span"}
              link={link ?? null}
              className="relative flex cursor-pointer items-center pr-2 pl-8 font-semibold text-white dark:text-dark-text-primary"
            >
              {IconOptions.find((item) => item.value === icon) &&
                React.createElement(
                  IconOptions.find((item) => item.value === icon).icon, // Pass the actual component
                  { size: 18, className: "title-icon ml-2" }
                )}
              {/*{icon && React.createElement(window[icon.value], { size: 50 })}*/}
              {title}
              {children && (
                <>
                  <Typography tag="span">
                    <FaChevronLeft className="icon absolute text-lg left-0 top-1/2 ml-2 -translate-y-1/2 text-white" />
                  </Typography>
                  <Typography
                    tag="span"
                    className="sub-menu-icon absolute left-0 ml-2"
                  >
                    <FaChevronLeft className="text-lg" />
                  </Typography>
                </>
              )}
            </Typography>
            {children && children}
          </li>
        </>
      ) : (
        <>
          <li
            className={`verticalMenuItem ${className ? className : ""} 
            ${isVisible ? "open" : ""}
           flex cursor-pointer items-center justify-center px-5 pb-2 text-white`}
            {...rest}
          >
            {IconOptions.find((item) => item.value === icon) &&
              React.createElement(
                IconOptions.find((item) => item.value === icon).icon, // Pass the actual component
                { size: 24, className: "ml-1" }
              )}
            {/*{children && (*/}
            {/*  <Typography tag="span" className="absolute text-lg -left-2">*/}
            {/*    <FaChevronLeft />*/}
            {/*  </Typography>*/}
            {/*)}*/}
          </li>
        </>
      )}
    </>
  );
};

export default VerticalMenuItem;
