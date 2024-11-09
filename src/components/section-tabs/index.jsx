import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionTabsWrapper } from "./style";
import { useState } from "react";
import classNames from "classnames";
import ScrollView from "../../base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;

  // console.log(tabNames);

  const [currentIndex, setCurrentIndex] = useState(0);
  const tabClickHandle = (index, name) => {
    setCurrentIndex(index);
    tabClick(index, name);
  };
  return (
    <SectionTabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={item}
              onClick={(e) => tabClickHandle(index, item)}
              className={classNames("item", { active: index === currentIndex })}
            >
              {item}
            </div>
          );
        })}
      </ScrollView>
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
};

export default SectionTabs;
