import React from "react";

const Row = (props) => {
  const {
    align = "start-xs",
    container = "container-fluid",
    children,
    className,
    direction = "row",
    spacing,
    spacingX,
    spacingY,
    ...rest
  } = props;

  return (
    <div
      className={
        container === "container"
          ? "container"
          : container === "container-fluid"
          ? "container-fluid"
          : "w-full"
      }
    >
      <div
        className={`${className ? className : ""} ${align} ${
          direction === "reverse" ? "row reverse" : "row"
        } ${spacing ? `--gap-${spacing}` : ""} ${
          spacingX ? `--gap-x-${spacingX}` : ""
        } ${spacingY ? `--gap-y-${spacingY}` : ""}`}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default Row;
