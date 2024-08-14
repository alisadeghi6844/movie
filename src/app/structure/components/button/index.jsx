import React from "react";
import Typography from "../typography/Typography";

const Button = (props) => {
  const {
    className,
    children,
    endIcon,
    link,
    size = "md",
    onClick,
    circle = false,
    startIcon,
    variant = "primary",
    disable = false,
    ...rest
  } = props;
  return (
    <Typography
      tag={link ? "a" : "button"}
      link={link ? link : null}
      onClick={() => onClick && onClick()}
      className={`${
        circle ? "rounded-full" : "rounded-md"
      } flex items-center justify-center transition-all focus:outline-none hover:-translate-y-px hover:shadow-md  ${
        {
          primary: `text-background-paper bg-primary-500 ${
            !disable && "hover:bg-primary-600"
          }`,
          "outline-primary": `text-primary-500 border-2 border-primary-500 bg-transparent ${
            !disable && "hover:bg-primary-500 hover:text-background-paper"
          }`,
          "outline-light": `text-white border-2 border-white bg-transparent ${
            !disable && "hover:bg-white hover:text-primary-500"
          }`,
          light: ` bg-background-paper focus:outline-none hover:shadow-none ${
            !disable && "hover:bg-gray-100"
          }`,
          success: `focus:outline-none text-background-paper bg-success-500 ${
            !disable && "hover:bg-success-600"
          }`,
          "outline-success": `focus:outline-none border-2 border-success-500 text-success-500 bg-transparent ${
            !disable && "hover:bg-success-500 hover:text-background-paper"
          }`,
          error: `focus:outline-none text-background-paper bg-error-500 ${
            !disable && "hover:bg-error-700"
          } focus:ring-4 focus:ring-error-400`,
          "outline-error": `focus:outline-none border-2 border-error-500 text-error-500 bg-transparent ${
            !disable && "hover:bg-error-500 hover:text-background-paper"
          }`,
          warning: `focus:outline-none text-background-paper bg-warning-400  ${
            !disable && "hover:bg-warning-500"
          }`,
          "outline-warning": `focus:outline-none border-2 border-warning-400  text-warning-400  bg-transparent ${
            !disable && "hover:bg-warning-400  hover:text-background-paper"
          }`,
          gray: `focus:outline-none text-background-paper bg-gray-400  ${
            !disable && "hover:bg-gray-400"
          }`,
          "outline-gray": `focus:outline-none border-2 border-gray-400  text-gray-400  bg-transparent ${
            disable && "hover:bg-gray-400"
          }`,
          secondary: `focus:outline-none text-background-paper bg-secondary-500  ${
            !disable && "hover:bg-secondary-500"
          }`,
          "outline-secondary": `focus:outline-none border-2 border-secondary-500  text-secondary-500  bg-transparent ${
            !disable && "hover:bg-secondary-500  hover:text-background-paper"
          }`,
        }[variant]
      } ${disable ? "opacity-50 cursor-not-allowed" : ""}
      ${
        {
          xs: "px-[7px] py-[5px] text-[13px] h-[30px]",
          sm: "px-[11px] py-[9px] text-[14px] h-[36px]",
          md: "text-[14px] px-[17px] py-[15px] h-[40px]",
          lg: "px-[19px] py-[17px] h-[46px]",
          xl: "px-6 py-3.5 h-12",
          full: "w-full px-6 py-3.5 h-12",
          auto: "",
        }[size]
      } ${className ? className : ""} 
      `}
      disabled={disable}
      {...rest}
    >
      {startIcon ? (
        <Typography tag="span" className="ml-2">
          {startIcon}
        </Typography>
      ) : null}
      <Typography className="flex items-center">{children}</Typography>
      {endIcon ? (
        <Typography tag="span" className="mr-2 flex items-center">
          {endIcon}
        </Typography>
      ) : null}
    </Typography>
  );
};

export default Button;
