import React, { useEffect, useState } from "react";
import Typography from "../typography/Typography";
import Icon from "../icon";

const TreeItem = (props) => {
  const {
    children,
    className,
    collapsable = false,
    link,
    title,
    ...rest
  } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (collapsable) {
      setIsVisible(true);
    }
  }, []);

  const handleClickMenu = (e) => {
    e.stopPropagation();
    setIsVisible((prevState) => !prevState);
  };

  return (
    <li
      onClick={(e) => handleClickMenu(e)}
      className={`${className ? className : ""} ${isVisible ? "open" : ""}`}
      {...rest}
    >
      <Typography
        tag={link ? "a" : "span"}
        link={link && link}
        className="flex items-center text"
      >
        {children && (
          <Typography tag="span" className="mr-2 icon">
            <Icon type="regular" name="plus" />
          </Typography>
        )}
        {title}
      </Typography>
      {children && children}
    </li>
  );
};

export default TreeItem;
