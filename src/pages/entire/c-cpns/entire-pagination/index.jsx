import PropTypes from "prop-types";
import React, { memo } from "react";
import Pagination from "@mui/material/Pagination";

import { PaginationWrapper } from "./style";
import { useSelector, shallowEqual } from "react-redux";
import { useDispatch } from "react-redux";
import {
  changeCurrentPage,
  fetchRoomList,
  changeIsLoading,
} from "@/store/modules/entire/createActions";

const EntireFilter = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
    }),
    shallowEqual
  );

  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  ///
  const dispatch = useDispatch();
  const pageClickHandle = (event, value) => {
    window.scrollTo(0, 0);
    dispatch(fetchRoomList(value - 1));
  };
  return (
    <PaginationWrapper>
      {!!roomList.length > 0 && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageClickHandle} />
          <div className="desc">
            第 {startCount} - {endCount} 个房源,共超过{totalCount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
