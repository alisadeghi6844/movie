import React from "react";
import Image from "../image";
function EmptyPicture({
  size = "xxl",
  sqr,
  caption,
  textClass,
  captionFontSize = "xl",
  captionFontColor = "text-primary-500",
  captionFontWeight = "font-bold",
  isLoading,
}) {
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/images/core/No-data-pana.png"}
            alt={"closed-stores-amico"}
            className={` ${
              {
                xs: "h-7 w-7 lg:h-8 lg:w-8",
                sm: "h-9 w-9 lg:h-10 lg:w-10",
                md: "h-11 w-11 lg:h-12 lg:w-12",
                lg: "h-12 w-12 lg:h-14 lg:w-14",
                xl: "w-16 h-16 lg:w-20",
                xxl: "w-96",
              }[size]
            } ${sqr ? "rounded-lg" : "rounded-full"} relative`}
          />
          <p
            className={` ${
              {
                xs: "text-xs",
                sm: "text-sm",
                base: "text-base",
                lg: "text-lg",
                xl: "text-xl",
                xxl: "text-2xl",
              }[captionFontSize]
            } ${captionFontColor} ${captionFontWeight} absolute bottom-12 ${
              textClass ?? ""
            }`}
          >
            {caption}
          </p>
        </div>
      )}
    </>
  );
}

export default EmptyPicture;
