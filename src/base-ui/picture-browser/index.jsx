import PropTypes from "prop-types";
import React, { memo } from "react";
import { BrowserWrapper } from "./style";
import { useEffect } from "react";
import IconClose from "../../assets/svg/icon-close";
import IconArrowLeft from "../../assets/svg/icon-arrow-left";
import IconArrowRight from "../../assets/svg/icon-arrow-right";
import { useState } from "react";

import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import { useRef } from "react";
import Indicator from "../indicator";
import classNames from "classnames";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showList, setShowList] = useState(true);
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

  ///
  const bottomItemClickHandle = (index) => {
    setIsNext(index > currentIndex);
    setCurrentIndex(index);
  };

  return (
    <BrowserWrapper $isNext={isNext} $showList={showList}>
      <div className="top">
        <div className="i-close-btn" onClick={closeBtnHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle()}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>

        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition
              // nodeRef={nodeRef}

              key={pictureUrls[currentIndex]}
              classNames="fade"
              timeout={400}
            >
              <img
                // ref={nodeRef}
                src={pictureUrls[currentIndex]}
                alt=""
              />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="indicator">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}
              </span>
              <span>room apartment 图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "展示"}照片的列表</span>
              <span className="icon-show">
                <IconArrowLeft />
              </span>
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames("item", {
                      active: currentIndex === index,
                    })}
                    key={item}
                    onClick={(e) => bottomItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeClick: PropTypes.func,
};

export default PictureBrowser;
