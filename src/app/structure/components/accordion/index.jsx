// * imports
// ** React
// ** library
// ** components
// ** assets
/*به ترتیب حروف الفبا*/

import React from "react";

const Accordion = (props) => {
  /*destruct props*/
  const { className, children, ...rest } = props;
  // ** redux

  // ** variable

  // ** hooks

  // ** handler

  // ** jsx
  return (
    <div className={`${className ? className : ""}`} {...rest}>
      {children}
    </div>
  );
};

export default Accordion;
