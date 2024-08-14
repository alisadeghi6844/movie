import React from "react";

import { useField } from "formik";

import SingleRange from "../../rangeSlider/singleRange";

const RangeSliderField = (props) => {
  const { label, required, min, max, ...rest } = props;
  const [field, { error }] = useField(rest);

  return (
    <>
      <SingleRange
        label={label}
        errorMessage={error}
        required={required}
        min={min}
        max={max}
        {...field}
        {...rest}
      />
    </>
  );
};

export default RangeSliderField;
