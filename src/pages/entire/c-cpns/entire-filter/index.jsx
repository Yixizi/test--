import PropTypes from "prop-types";
import React, { memo, useState } from "react";

import filterData from "@/assets/data/filter_data.json";
import { FilterWrapper } from "./style";
import classNames from "classnames";

const EntireFilter = memo((props) => {
  ///
  const [selectItems, setSelectItems] = useState([]);

  const itemClickHandle = (item) => {
    const newItem = [...selectItems];

    if (newItem.includes(item)) {
      const itemIndex = newItem.findIndex((filterItem) => filterItem === item);
      newItem.splice(itemIndex, 1);
    } else {
      newItem.push(item);
    }
    setSelectItems(newItem);
  };
  return (
    <FilterWrapper>
      <div className="filter">
        {filterData.map((item) => {
          return (
            <div
              className={classNames("item", {
                active: selectItems?.includes(item),
              })}
              onClick={(e) => itemClickHandle(item)}
              key={item}
            >
              {item}
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
});

EntireFilter.propTypes = {};

export default EntireFilter;
