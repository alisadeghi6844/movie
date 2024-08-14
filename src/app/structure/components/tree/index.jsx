import React from "react";
import TreeMenu from "./TreeMenu";
import TreeItem from "./TreeItem";

const Tree = (props) => {
  const { className, collapsable, data, liClassName, ...rest } = props;
  return (
    <TreeMenu className={className && className} {...rest}>
      {data.length
        ? data.map((item, index) => (
            <TreeItem
              className={liClassName && liClassName}
              collapsable={collapsable}
              key={`${item.title}`}
              title={item.title}
            >
              {item.children?.length > 0 ? (
                <Tree collapsable={collapsable} data={item.children} />
              ) : null}
            </TreeItem>
          ))
        : null}
    </TreeMenu>
  );
};

export default Tree;
