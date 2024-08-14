import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "./selection.json";

const Icon = (props) => {
  const { color = "grey", size = "sm", icon, className = "", ...rest } = props;
  return (
    <IcomoonReact
      iconSet={iconSet}
      color={
        {
          primary: "#1eafed",
          secondary: "#f44c71",
          success: "#5CAF62",
          grey: "#6c757d",
          white: "#ffffff",
          error: "#b91c1c",
          warning: "#fbb140",
        }[color]
      }
      size={
        {
          xxs: 10,
          xs: 20,
          sm: 25,
          lg: 30,
          xl: 35,
          xxl: 40,
          "3xl": 45,
          "4xl": 50,
          "5xl": 55,
        }[size]
      }
      className={className}
      icon={icon}
      {...rest}
    />
  );
};

export default Icon;
