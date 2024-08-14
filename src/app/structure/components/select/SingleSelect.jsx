import React, { useState } from "react";
import Select from "react-select";
import colors from "tailwindcss/colors";
import { PropTypes } from "prop-types";
import Typography from "../typography/Typography";

const SingleSelect = (props) => {
  const {
    value,
    defaultValue,
    errorMessage,
    helperText,
    isClearable = true,
    disabled,
    size = "full",
    isLoading,
    isMulti,
    isSearchable,
    color,
    label,
    options,
    required,
    darkMode,
    placeholder,
    ...rest
  } = props;

  const Styles = {
    control: (base) => ({
      ...base,
      borderRadius: "0px",
      alignItems: "end",
      color: `${color === "primary" ? "#1eafed" : "rgb(125 125 125)"}`,
      overflowY: "auto",
      height: !isMulti
        ? size === "xs"
          ? "1.75rem"
          : size === "sm"
          ? "2rem"
          : size === "md"
          ? "2.5rem"
          : size === "lg"
          ? "2.75rem"
          : size === "xl"
          ? "3.5rem"
          : size === "full"
          ? "2.75rem"
          : ""
        : null,
      maxHeight: isMulti && "30rem",
      fontSize:
        size === "xs"
          ? "0.75rem"
          : size === "sm"
          ? "0.875rem"
          : size === "md"
          ? "1rem"
          : size === "lg"
          ? "1.125rem"
          : size === "xl"
          ? "1.25rem"
          : size === "full"
          ? "0.875rem"
          : "",
      paddingRight: "0rem",
      boxShadow: "none",
      "&:hover": {
        borderColor: "none",
      },
      backgroundColor: "dark:bg-dark-gray-400",
      border: 0,
      borderBottom: `2px solid ${
        color === "primary" ? "#1eafed" : "rgb(209 213 219)"
      }`,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "dark:text-white",
    }),
    menuList: (base) => ({
      ...base,
      "::-webkit-scrollbar": {
        width: "0",
      },
    }),
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        border: 0,
        fontSize: "1rem",
        fontWeight: 500,
        backgroundColor: darkMode === "dark" ? "rgb(38  61  81)" : colors.white,
        // TODO read from tailwind config
        color:
          isSelected && darkMode === "dark"
            ? "rgb(27 107 250)"
            : isSelected && darkMode === "light"
            ? colors.blue[500]
            : darkMode === "dark"
            ? "rgb(187 195 221)"
            : colors.gray[700],
        justifyContent: "start",
        display: "flex",
        cursor: "pointer",
      };
    },
    dropdownIndicator: (base) => ({
      ...base,
      color: `${color === "primary" ? "#1eafed" : "rgb(125 125 125)"}`,
    }),
  };

  return (
    <div className={`w-full ${darkMode === "dark" ? "select-dark" : ""}`}>
      <div className="w-full relative">
        <Select
          classNamePrefix="select"
          components={{
            IndicatorSeparator: () => null,
          }}
          value={value}
          defaultValue={defaultValue && defaultValue}
          isDisabled={disabled}
          isClearable={isClearable}
          isLoading={isLoading}
          isMulti={isMulti}
          isRtl
          closeMenuOnSelect={isMulti}
          isSearchable={isSearchable}
          loadingMessage={() => "در حال بارگذاری..."}
          maxMenuHeight={140}
          noOptionsMessage={() => "موردی یافت نشد!"}
          options={options}
          // onChange={e=>setValue(e)}
          placeholder={null}
          styles={Styles}
          className="basic-multi-select"
          {...rest}
        />
        <label
          className={`absolute text-sm lg:text-base top-[12px] right-0
        duration-300 transform origin-right scale-90 ${
          color === "primary" ? "!text-primary-500" : "!text-gray-400"
        }
         ${value ? "scale-75 -translate-y-8 " : ""} `}
        >
          {label}
          {required && <span className="text-error-500">*</span>}
        </label>
      </div>

      <Typography
        className={`text-xs ${
          !!errorMessage ? "text-error-500 " : "text-text-secondary"
        }`}
      >
        {!!errorMessage ? errorMessage : helperText}
      </Typography>
    </div>
  );
};

SingleSelect.propTypes = {
  defaultValue: PropTypes.any,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  isClearable: PropTypes.bool,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isMulti: PropTypes.bool,
  required: PropTypes.bool,
  isSearchable: PropTypes.bool,
  options: PropTypes.array,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
};

export default SingleSelect;
