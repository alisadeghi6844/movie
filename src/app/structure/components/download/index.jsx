import React from "react";
import { BASE_URL } from "../../api/config";
import Typography from "../typography/Typography";

const Download = (props) => {
  const { className, link, children, ...rest } = props;
  return (
    <Typography
      tag="a"
      link={`${BASE_URL}Core/Documents/GetImage?id=${link ?? null}`}
      className={className ? className : null}
      download
      {...rest}
    >
      {children ?? null}
    </Typography>
  );
};

export default Download;
