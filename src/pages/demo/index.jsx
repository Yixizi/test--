import PropTypes from "prop-types";
import React, { memo } from "react";
import { DemoWrapper } from "./style";
import Indicator from "@/base-ui/indicator";
import { useState } from "react";

const Demo = memo((props) => {
  const names = ["ada", "adad", "dhdh", "A^dva", "asdyhy", "121e1", "43t3f"];

  ///
  const [selectIndex, setSelectIndex] = useState(0);
  const toggleClickHandle = (isNext = true) => {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = names.length - 1;
    if (newIndex > names.length - 1) newIndex = 0;
    setSelectIndex(newIndex);
    console.log(newIndex);
  };
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => toggleClickHandle(false)}>上一个</button>
        <button onClick={(e) => toggleClickHandle(true)}>下一个</button>
      </div>
      <div className="list">
        <Indicator selectIndex={selectIndex}>
          {names.map((item) => {
            return <button key={item}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

Demo.propTypes = {};

export default Demo;
