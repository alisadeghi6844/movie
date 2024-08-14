// h auto
//w full
//rest width className , height

// gray primary succus error

// table avatar card list cardgrid

import React from "react";

const Skeleton = (props) => {
  const { width="w-full", height = "h-full",bg="bg-gray-200",rounded="rounded-md", className, ...rest } = props;

  return (
    <div className="h-full animate-pulse">
      <div className={`${height} ${width} ${bg} ${rounded} ${className ?? ""}`} {...rest}>
      </div>
    </div>
  );
};

export default Skeleton;
