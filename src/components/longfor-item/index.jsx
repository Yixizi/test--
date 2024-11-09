import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongforItemWrapper } from "./style";

const LongItem = memo((props) => {
  const { itemData } = props;
  return (
    <LongforItemWrapper>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
          <div className="bg-cover"></div>
        </div>
        <div className="info">
          <div className="city">
            {itemData.city}
          </div>
          <div className="price">均价 {itemData.price}</div>
        </div>
      </div>
    </LongforItemWrapper>
  );
});

LongItem.propTypes = {
  itemData: PropTypes.object,
};

export default LongItem;
