import React from "react";
import Link from "next/link";


const Typography = (props) => {
  const { children, tag, variant, className, link, ...rest } = props;
  return (
    <>
      {tag === "h1" ? (
        <h1
          className={`${variant ? variant : tag} ${className ? className : ""}`}
          {...rest}
        >
          {children}
        </h1>
      ) : tag === "h2" ? (
        <h2
          className={`${variant ? variant : tag} ${className ? className : ""}`}
          {...rest}
        >
          {children}
        </h2>
      ) : tag === "h3" ? (
        <h3
          className={`${variant ? variant : tag} ${className ? className : ""}`}
          {...rest}
        >
          {children}
        </h3>
      ) : tag === "h4" ? (
        <h4
          className={`${variant ? variant : tag} ${className ? className : ""}`}
          {...rest}
        >
          {children}
        </h4>
      ) : tag === "h5" ? (
        <h5
          className={`${variant ? variant : tag} ${className ? className : ""}`}
          {...rest}
        >
          {children}
        </h5>
      ) : tag === "h6" ? (
        <h6
          className={`${variant ? variant : tag} ${className ? className : ""}`}
          {...rest}
        >
          {children}
        </h6>
      ) : tag === "span" ? (
        <span
          className={`${variant ? variant : tag} ${className ? className : ""}`}
          {...rest}
        >
          {children}
        </span>
      ) : tag === "a" ? (
        <Link
          href={link && link}
          className={`${variant ? variant : tag} ${className ? className : ""}`}
          {...rest}
        >
          {children}
        </Link>
      ) : tag === "button" ? (
        <button className={className} {...rest}>
          {children}
        </button>
      ) : (
        <div
          className={`${variant ? variant : tag} ${className ? className : ""}`}
          {...rest}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Typography;
