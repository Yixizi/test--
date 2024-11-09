import PropTypes from "prop-types";
import React, { memo } from "react";
import { shallowEqual } from "react-redux";
import { useCallback } from "react";
import { useSelector } from "react-redux";

import RoomItem from "@/components/room-item";
import { EntireRoomsWrapper } from "./style";
import { changeDetailInfo } from "@/store/modules/detail";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );

  ///
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const itemClickHandle = useCallback(
    (itemData) => {
      console.log(itemData);
      dispatch(changeDetailInfo(itemData));
      navigate('/detail')
    },
    [navigate]
  );
  return (
    <EntireRoomsWrapper>
      <h2 className="title">共{totalCount}处房屋</h2>
      <div className="list">
        {roomList.map((item) => {
          return (
            <RoomItem
              itemClick={itemClickHandle}
              itemData={item}
              isCover={isLoading}
              itemWidth="20%"
              key={item._id}
            >
              {item}
            </RoomItem>
          );
        })}
      </div>
      {isLoading && <div className={classNames('cover')}></div>}
    </EntireRoomsWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
