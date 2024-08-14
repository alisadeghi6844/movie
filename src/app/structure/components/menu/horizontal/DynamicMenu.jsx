import React from "react";

import HorizontalMenu from "./HorizontalMenu";
import HorizontalMenuItem from "./HorizontalMenuItem";

const DynamicMenu = (props) => {
  const { className, collapsable = false, data, ...rest } = props;
  return (
    <HorizontalMenu
      className={`flex-none ${className}`}
      collapsable={collapsable}
      {...rest}
    >
      {data?.length
        ? data.map((item) => (
            <HorizontalMenuItem
              key={`${item?.id}`}
              title={item?.title}
              icon={item?.icon}
              link={
                item?.formID
                  ? !item?.children?.length
                    ? item.route + item.formID ?? null
                    : null
                  : !item?.children?.length
                  ? item.route ?? null
                  : null
              }
            >
              {item?.children?.length > 0 ? (
                <DynamicMenu data={item.children} />
              ) : null}
            </HorizontalMenuItem>
          ))
        : null}
    </HorizontalMenu>
  );
};

export default DynamicMenu;
