import React, { memo } from "react";
import styleStrToObject from "./utils";

const IconClose = memo(() => {
  return (
    <svg
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={styleStrToObject("width:50px;height:50px;fill:currentcolor;")}

    >
      <path d="M810.666664 273.066666 750.933334 213.333334 512 452.266666 273.066666 213.333334 213.333334 273.066666 452.266666 512 213.333334 750.933334 273.066666 810.666664 512 571.733334 750.933334 810.666664 810.666664 750.933334 571.733334 512 810.666664 273.066666Z"></path>
    </svg>
  );
});

export default IconClose;
