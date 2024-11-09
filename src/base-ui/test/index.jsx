import PropTypes from "prop-types";
import React, { memo } from "react";
import { BrowserWrapper } from "./style";
import { useEffect } from "react";
import IconClose from "../../assets/svg/icon-close";
import IconArrowLeft from "../../assets/svg/icon-arrow-left";
import IconArrowRight from "../../assets/svg/icon-arrow-right";
import { useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import { useRef } from "react";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const nodeRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  ////
  const closeBtnHandle = () => {
    if (closeClick) closeClick();
  };

  ///

  const [isNext, setIsNext] = useState(true);
  const controlClickHandle = (isNext = true) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    setCurrentIndex(newIndex);

    //
    setIsNext(isNext);
  };
  console.log(isNext);
  return (
    <BrowserWrapper $isNext={isNext}>
      <div className="top">
        <div className="i-close-btn" onClick={closeBtnHandle}>
          <IconClose />
        </div>
      </div>
      {/* <div className="slider"> */}
        {/* <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle()}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div> */}
        <Swiper 
        className="slider"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}  
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide 
        className='picture'
        >
            <img  src={pictureUrls[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pictureUrls[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pictureUrls[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pictureUrls[3]} />
          </SwiperSlide>
        </Swiper>
      {/* </div> */}
      <div className="indicator"></div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;
