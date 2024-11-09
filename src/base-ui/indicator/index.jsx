import PropTypes from "prop-types";
import React, { memo } from "react";
import { IndicatorWrapper } from "./style";
import { useEffect } from "react";
import { useRef } from "react";

const Indicator = memo((props) => {
  const { selectIndex=0 } = props;

  const contentRef = useRef();
  useEffect(() => {

    const selectItemEl = contentRef.current.children[selectIndex];
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;

    //
    const contentWidth = contentRef.current.clientWidth;
    const contentScrollWidth = contentRef.current.scrollWidth;
    let totalDistance = contentScrollWidth - contentWidth;
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;

    //
    if (distance < 0) distance = 0;
    if (distance > totalDistance) distance = totalDistance;
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
