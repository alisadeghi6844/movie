import React from "react";
import Typography from "../typography/Typography";
import Icon from "../icon";

const Tag = (props) => {
  const { title, handleCloseTag, ...rest } = props;
  return (
    <div
      className="bg-grey-100 text-primary-800 text-xs font-medium mr-2 px-2.5 py-1.5 rounded flex items-center"
      {...rest}
    >
      <Typography className="flex-1">{title ?? null}</Typography>
      <Typography
        className="mr-2 cursor-pointer"
        onClick={() => handleCloseTag(title)}
      >
        <Icon icon="cancel1" color="error" size="xs"/>
      </Typography>
    </div>
  );
};

export default Tag;
