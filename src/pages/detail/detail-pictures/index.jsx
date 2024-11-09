import React, { memo } from "react";
import { PicturesWrapper } from "./style";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import PictureBrowser from "../../../base-ui/picture-browser";
import Test from "../../../base-ui/test";
import { useState } from "react";

const DetailPictures = memo(() => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );
  //
  const [showBrowser, setShowBrowser] = useState(false);

  //
  const serializedState = JSON.parse(localStorage.getItem("detailInfo"));
  const detailLength = Object.keys(detailInfo).length;
  let detailPictureInfo = detailLength ? detailInfo : serializedState;
  console.log(detailPictureInfo);

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={(e) => setShowBrowser(true)}>
            <img src={detailPictureInfo.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailPictureInfo?.picture_urls.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(e) => setShowBrowser(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={(e) => setShowBrowser(true)}>
        显示照片
      </div>
      {showBrowser && (
        <PictureBrowser
          closeClick={(e) => setShowBrowser(false)}
          pictureUrls={detailPictureInfo.picture_urls}
        />
        // <Test
        //   closeClick={(e) => setShowBrowser(false)}
        //   pictureUrls={detailPictureInfo.picture_urls}
        // />
      )}
    </PicturesWrapper>
  );
});

export default DetailPictures;
