import React from "react";

import VerticalMenu from "./VerticalMenu";
import VerticalMenuItem from "./VerticalMenuItem";
import { useState } from "react";

const DynamicMenu = (props) => {
  const {
    className,
    collapsable,
    liClassName,
    data,
    title,
    icon,
    sidebarStatus,
    ...rest
  } = props;
  console.log("data ", data);
  const [isVisible, setIsVisible] = useState();
  return (
    <VerticalMenu className={className && className} {...rest}>
      <VerticalMenuItem
        title={title}
        tag={null}
        sidebarStatus={sidebarStatus}
        className="sub-menu-title"
      />
      {data?.length > 0
        ? data.map((item) => (
            <VerticalMenuItem
              className={liClassName && liClassName}
              collapsable={collapsable}
              key={`${item.id}`}
              title={item.title}
              icon={item?.icon}
              sidebarStatus={sidebarStatus}
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
              {item.children?.length > 0 ? (
                <DynamicMenu
                  title={item.title}
                  collapsable={collapsable}
                  sidebarStatus={sidebarStatus}
                  data={item.children}
                  isClose={isVisible}
                  onMouseOver={() => setIsVisible(false)}
                />
              ) : null}
            </VerticalMenuItem>
          ))
        : null}
    </VerticalMenu>
  );
};

export default DynamicMenu;
