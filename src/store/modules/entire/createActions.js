import { getEntireRoomsData } from "../../../servers/modules/entire";
import * as actionTypes from "./constants";

export const changeCurrentPage = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});
export const changeRoomsList = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});
export const changeTotalCount = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoading = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});
export const changeHeaderConfig = (obj) => ({
  type: 'header',
  obj,
});

export const fetchRoomList = (pageNum = 0) => {
  return (dispatch, getState) => {
    dispatch(changeIsLoading(true));

    dispatch(changeCurrentPage(pageNum));
    const page = getState().entire.currentPage * 20;
    getEntireRoomsData(page)
      .then((res) => {
        dispatch(changeRoomsList(res.list));
        dispatch(changeTotalCount(res.totalCount));
      })
      .finally((res) => {
        dispatch(changeIsLoading(false));
      });
  };
};
