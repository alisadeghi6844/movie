import React from "react";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import Typography from "../typography/Typography";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/red.css";
import moment from "jalali-moment";
import { IoClose } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const JalaliDatepicker = (props) => {
  const {
    className,
    col,
    calenderPosition = "top-right",
    format = "YYYY/MM/DD",
    mode,
    minDate,
    maxDate,
    value,
    label,
    isTime = true,
    onlyMonthPicker = false,
    onlyYearPicker = false,
    onChange,
    range = false,
    required,
    errorMessage,
    helperText,
    darkMode,
    inputClassName,
    hideSeconds = false,
    ...rest
  } = props;

  const handleChangeDatePicker = (date, format) => {
    let object = { date, format };

    onChange(new DateObject(object).format());
  };

  const plugins = [
    isTime ? <TimePicker position="bottom" hideSeconds={hideSeconds} /> : [],
  ];

  const current = new Date();
  const currentDate = moment
    .from(current, "en", "YYYY/MM/DD")
    .format("jYYYY/jMM/jDD");
  return (
    <div className="w-full">
      <div className="relative z-0 w-full">
        <DatePicker
          portal
          minDate={minDate ? minDate : mode === "future" ? currentDate : null}
          maxDate={maxDate ? maxDate : mode === "past" ? currentDate : null}
          inputClass={`h-11 truncate w-full m-w-full bg-background-paper 
           focus:outline-none
           border-b-2 block py-4 px-2 text-sm text-gray-900
           bg-transparent border-0 border-b-2 border-gray-300 appearance-none
           dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:ring-0 focus:border-primary-500 peer ${
             inputClassName ? inputClassName : ""
           }`}
          editable={false}
          value={value && value}
          range={range && range}
          onlyMonthPicker={onlyMonthPicker && onlyMonthPicker}
          onlyYearPicker={onlyYearPicker && onlyYearPicker}
          format={format && format}
          plugins={plugins}
          calendar={persian}
          className={`purple ${darkMode === "dark" ? "bg-dark" : ""} ${
            className && className
          }`}
          onChange={handleChangeDatePicker}
          locale={persian_fa}
          calendarPosition={calenderPosition && calenderPosition}
          {...rest}
        />
        <label
          className={`absolute right-0 top-[12px] -z-10
        origin-right scale-90 transform text-sm text-gray-400 duration-300 lg:text-base
         ${value ? "-translate-y-8 scale-75 " : ""} `}
        >
          {label}
          {required && <span className="text-error-500">*</span>}
        </label>
        {value && (
          <div className="absolute left-6 top-0 ml-3 mt-2">
            <IoClose
              className="text-grey-600 text-2xl"
              onClick={() => {
                onChange("");
              }}
            />
          </div>
        )}
        <div className="absolute left-0 top-0 ml-3 mt-2">
          <SlCalender className="text-grey-600 text-xl" />
        </div>
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

export default JalaliDatepicker;
