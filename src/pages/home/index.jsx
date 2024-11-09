import React, { memo, useEffect, useState, useCallback } from "react";
import { shallowEqual } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import { changeHeaderConfig } from "@/store/modules/main";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "@/pages/home/style.js";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import SectionTabs from "../../components/section-tabs";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyObj } from "@/utils";
import HomeLongfor from "./c-cpns/home-longfor";
import AppHeader from "@/components/app-header";
import HomeSectionV3 from "./c-cpns/home-section-v3";

const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  ///
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());

    dispatch(changeHeaderConfig({ isFixed: true, topAlpha: true }));
  }, [dispatch]);

  //

  return (
    <HomeWrapper>
      {/* <AppHeader/> */}
      <HomeBanner />
      <div className="content">
        {isEmptyObj(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        {isEmptyObj(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyObj(recommendInfo) && (
          <HomeSectionV2 infoData={recommendInfo} />
        )}

        {isEmptyObj(highScoreInfo) && (
          <HomeSectionV1 infoData={highScoreInfo} />
        )}
        {isEmptyObj(goodPriceInfo) && (
          <HomeSectionV1 infoData={goodPriceInfo} />
        )}
        {isEmptyObj(plusInfo) && (
          <HomeSectionV3 to="baidu" infoData={plusInfo} />
        )}
      </div>
    </HomeWrapper>
  );
});

export default Home;
