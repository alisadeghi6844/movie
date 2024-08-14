import React from "react";

const Drawer = (props) => {
  const {
    staticMenu = false,
    children,
    className,
    onClose: handleClose,
    open = false,
    isBackgrond = false,
    position = "right",
    size = "lg",
    ...rest
  } = props;

  return (
    <>
    {isBackgrond?(<div
        onClick={handleClose}
        className={`w-full h-full fixed top-0 right-0 z-40 ${
          staticMenu ? "hidden" : ""
        }  ${open ? "block opacity-60" : "hidden"}`}
      />):(<></>)}
      
      <div
        className={`h-full fixed z-50 shadow transition-transform duration-300 top-0  
        ${className ? className : ""}
       ${
         {
           lg: "w-64",
           md: "w-40",
           sm: "w-24",
           xl: "w-80",
           full: "w-full",
         }[size]
       } ${
          open
            ? `${
                position === "right"
                  ? {
                      xl: "-translate-x-80 -right-80",
                      lg: "-translate-x-64 -right-64",
                      md: "-translate-x-40 -right-40",
                      sm: "-translate-x-24 -right-24",
                    }[size]
                  : {
                      xl: "translate-x-80 -left-80",
                      lg: "translate-x-64 -left-64",
                      md: "translate-x-40 -left-40",
                      sm: "translate-x-24 -left-24",
                    }[size]
              }`
            : `${position === "right" ? "-right-full" : "-left-full"}`
        } `}
        {...rest}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
