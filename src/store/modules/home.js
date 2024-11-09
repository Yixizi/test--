import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData
} from "@/servers";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  (payload, { dispatch, getState }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfo(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfo(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfo(res));
    });
    getHomeHotRecommendData().then((res) => {
      dispatch(changeRecommendInfo(res));
    });
    getHomeLongforData().then((res) => {
      dispatch(changeLongforInfo(res));
    });
    getHomePlusData().then((res) => {
      dispatch(changePlusInfo(res))
    })
  } 

);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {},
    plusInfo:{}
  },
  reducers: {
    changeGoodPriceInfo(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfo(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfo(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfo(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongforInfo(state, { payload }) {
      state.longforInfo = payload;
    },
    changePlusInfo(state, { payload }) {
      state.plusInfo = payload;
    },
  },
  // extraReducers:(builder)=>{
  //     builder
  //     .addCase
  //         (fetchHomeDataAction.fulfilled,(state,{payload})=>{
  //             state.goodPriceInfo=payload
  //         })

  // }
});

export const {
  changeGoodPriceInfo,
  changeHighScoreInfo,
  changeDiscountInfo,
  changeRecommendInfo,
  changeLongforInfo,
  changePlusInfo
} = homeSlice.actions;

export default homeSlice.reducer;
