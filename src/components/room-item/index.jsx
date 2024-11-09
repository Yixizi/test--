import React, { memo } from "react";
import PropTypes from "prop-types";
import { RoomWrapper } from "./style";
import Rating from "@mui/material/Rating";
import { Carousel } from "antd";
import IconArrowLeft from "../../assets/svg/icon-arrow-left";
import IconArrowRight from "../../assets/svg/icon-arrow-right";
import { useRef } from "react";
import Indicator from "../../base-ui/indicator";
import { useState } from "react";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%",itemClick,isCover } = props;
  const [selectIndex, setSelectIndex] = useState(0);


  //
  const sliderRef = useRef();
  const controlClickHandle = (isRight = true,e) => {
    console.dir(e)
    isRight ? sliderRef.current.next() : sliderRef.current.prev();

    //
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1;
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0;
    setSelectIndex(newIndex);


    ////
    e.stopPropagation()
  };

  //
  const itemClickHandle=()=>{
    if(itemClick) itemClick(itemData)
  }


  const coverElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );

  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(false,e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(true,e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>

      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="dot-item" key={item}>
                <div
                  className={classNames("dot", {
                    'active': selectIndex === index,
                  'cover-opacity':isCover})}
                ></div>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
  return (
    <RoomWrapper
      $itemWidth={itemWidth}
      $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      onClick={itemClickHandle}
    >
      <div className="inner">
        {itemData.picture_urls ? sliderElement : coverElement}

        <div className="desc">
          {itemData?.verify_info?.messages?.join(" · ")}
        </div>

        <div className="name">{itemData?.name}</div>
        <div className="price">￥{itemData?.price}/晚</div>
        <div className="button">
          <Rating
            name="simple-controlled"
            value={itemData?.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: "red" }}
          />
          <span className="count">{itemData?.reviews_count}</span>

          {itemData?.bottom_info && (
            <span className="extra">{itemData?.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
};

export default RoomItem;
