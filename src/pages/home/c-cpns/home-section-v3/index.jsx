import PropTypes from "prop-types";
import React, { memo } from "react";

import { HomeSectionV3Wrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeSectionV3 = memo((props) => {
  const { infoData,to } = props;
  // console.log(infoData);
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list.map((item) => {
            return <RoomItem itemData={item} key={item.id} />;
          })}
        </ScrollView>
      </div>
      <SectionFooter to={to}  name='plus'/>
    </HomeSectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object,
  to:PropTypes.string
};

export default HomeSectionV3;
