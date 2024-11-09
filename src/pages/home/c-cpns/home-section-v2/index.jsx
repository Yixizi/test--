import PropTypes from "prop-types";
import React, { memo, useState, useCallback } from "react";
import { SectionV2Wrapper } from "./style";

import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionHeader from "@/components/section-header";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  /////数据转换
  //   if (infoData.dest_list) tabNames = Object.keys(infoData.dest_list);
  const initialName = Object.keys(infoData.dest_list)[0]??'';
  const [name, setName] = useState(initialName);
  let tabNames = [];
  tabNames = Object.keys(infoData.dest_list);

  const tabClickHandle = useCallback((index, name) => {
    setName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <SectionHeader
        title={infoData.title}
        subtitle={infoData.subtitle}
      ></SectionHeader>

      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />

      <SectionRooms roomList={infoData?.dest_list?.[name]} itemWidth="33.33%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
