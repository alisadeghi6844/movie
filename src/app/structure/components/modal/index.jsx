import React from "react";

import Icon from "../icon";
import Typography from "../typography/Typography";

const Modal = (props) => {
  const {
    bgModal,
    headerIcon,
    headerTitle,
    headerSubTitle,
    className,
    children,
    hideIcon = false,
    hideBackground = false,
    onClose,
    open = false,
    size = "auto",
    ...rest
  } = props;

  return (
    <>
      {!hideBackground ? (
        <div
          onClick={() => onClose()}
          className={`w-full h-full fixed top-0 right-0 z-50 bg-grey-800 opacity-80 ${
            open ? "block" : "hidden"
          }`}
        />
      ) : null}

      <div
        className={`z-50 fixed overflow-y-auto top-1/2 right-1/2 max-h-[90vh] ${
          bgModal ? bgModal : "bg-background-paper"
        } px-4 pb-4 ${
          hideIcon ? "pt-4" : "pt-10"
        } rounded-lg translate-x-1/2 -translate-y-1/2 max-h-screen overflow-y-auto ${
          className ? className : ""
        } ${open ? "block" : "hidden"}
        ${
          {
            auto: "w-auto",
            sm: "max-w-sm",
            md: "max-w-md min-w-[22%]",
            lg: "min-w-[40%]",
            xl: "min-w-[60%]",
            full: "w-full",
          }[size]
        }
        `}
        {...rest}
      >
        <div>
          <div className="flex items-center">
            {headerIcon ? <Icon name={headerIcon} size="lg" /> : null}
            {headerTitle ? (
              <Typography tag="h6">{headerTitle}</Typography>
            ) : null}
          </div>
          {headerSubTitle ? <Typography>{headerTitle}</Typography> : null}
        </div>
        {!hideIcon ? (
          <div
            className="absolute cursor-pointer top-3 left-3 "
            onClick={() => onClose()}
          >
            <Icon icon="cancel1" />
          </div>
        ) : null}
        {children}
      </div>
    </>
  );
};

export default Modal;
