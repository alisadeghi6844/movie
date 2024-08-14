import React, { useEffect } from "react";
import AccordionSkeleton from "../../container/organism/Skeleton/AccordionSkeleton";
const AccordionItem = (props) => {
  const { children, className,loading, ...rest } = props;

  return (
    <div
      className={`${
        className ? className : ""
      } rounded-lg focus:ring-4 focus:ring-primary-200 bg-white shadow-lg`}
      {...rest}
    >
    {loading?(<AccordionSkeleton />):(<>{children}</>)}
      
    </div>
  );
};

export default AccordionItem;
