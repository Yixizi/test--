import React, { memo, useState, useRef } from "react";
import { HeaderWrapper, SearchAreaWrapper } from "./style";
import HeaderLeft from "@/components/app-header/c-cpns/header-left/index.jsx";
import HeaderCenter from "@/components/app-header/c-cpns/header-center/index.jsx";
import PropTypes from "prop-types";
import HeaderRight from "@/components/app-header/c-cpns/header-right/index.jsx";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import classNames from "classnames";
import useScrollPosition from "../../hooks/useScrollPosition";
import { ThemeProvider } from "styled-components";

const Header = memo((props) => {
  const [isSearch, setIsSearch] = useState(false);
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed, topAlpha } = headerConfig;

  ///
  const { scrollY } = useScrollPosition();
  console.log(scrollY);
  const prevY = useRef(0);
  if (!isSearch) {
    prevY.current = scrollY;
  }
  if (isSearch && Math.abs(scrollY - prevY.current) > 30) {
    setIsSearch(false);
  }

  ///
  const isAlpha = topAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper
        $isAlpha={isAlpha}
        className={classNames({ fixed: isFixed })}
      >
        <div className="content">
          <div className="top">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            ></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>

          <SearchAreaWrapper
            $isSearch={isAlpha || isSearch}
          ></SearchAreaWrapper>
        </div>

        {isSearch === true && (
          <div onClick={(e) => setIsSearch(false)} className="cover"></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default Header;
