import React from "react";

function SpotColorSetting({ bgColor = "from-blue-700 to-cyan-500", className,colorPicker }) {
  
  return (
    <>
      <div
        className={`w-6 h-6 rounded-full duration-200 bg-gradient-to-r cursor-pointer focus:w-8 ${bgColor} ${
          className ? className : ""
        }`
        }
        onClick={colorPicker}
      ></div>
    </>
  );
}

export default SpotColorSetting;
