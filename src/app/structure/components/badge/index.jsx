import React from "react";

import Typography from "../typography/Typography";

const Badge = (props) => {
  const { number, className, variant = "error", ...rest } = props;
  return (
    <span
      className={`${
        {
          primary: `text-background-paper bg-primary-100 text-primary-800`,
          success: `text-background-paper bg-secondary-100 text-secondary-800 `,
          error: `text-background-paper bg-error-100 text-error-800`,
          warning: `text-background-paper bg-warning-100 text-warning-800`,
        }[variant]
      } text-xs font-medium px-1 py-[1px] rounded dark:bg-error-900 dark:text-error-300 absolute -top-2 -right-2 ${
        className ?? ""
      }`}
    {...rest}
    >
      {number ? number : 0}
      
    </span>
  );
};

export default Badge;
