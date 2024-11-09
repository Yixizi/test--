import PropTypes from "prop-types";
import React, { memo } from "react";
import { ViewWrapper } from "./style";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  // const [posIndex,setPosIndex]=useState(0)
  const totalDistanceRef = useRef(null);
  const posIndexRef = useRef(null);

  /////
  const scrollContentRef = useRef(null);


  // console.log(scrollContentRef.current.scrollWidth)

  useEffect(() => {

    posIndexRef.current = 0;

    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    // console.log(scrollWidth, clientWidth, totalDistance,props.children  );
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [ totalDistanceRef.current]);

  const leftClickHandle = () => {
    const newIndex = posIndexRef.current - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    posIndexRef.current = newIndex;
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  };

  const rightClickHandle = () => {
    const newIndex = posIndexRef.current + 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    posIndexRef.current = newIndex;
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  };

  return (
    <ViewWrapper>
      {showLeft && (
        <div onClick={leftClickHandle} className="left ">
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div onClick={rightClickHandle} className="right ">
          <IconArrowRight />
        </div>
      )}
      <div  className="scroll">
        <div ref={scrollContentRef}  className="scroll-content ">
          
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
