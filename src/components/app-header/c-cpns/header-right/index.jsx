import React, { memo } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "../../../../assets/svg/icon-global";
import IconMenu from "../../../../assets/svg/icon-menu";
import IconAvatar from "../../../../assets/svg/icon-avatar";
import { useState, useEffect } from "react";
import { useRef } from "react";

const HeaderRight = memo(() => {
  const [panelShow, setPanelShow] = useState(false);
  const profileRef = useRef(null);

  //副作用代码
  useEffect(() => {
    const windowClickHandle = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target))
        setPanelShow(false);
    };
    window.addEventListener("click", windowClickHandle, true);

    return () => {
      window.removeEventListener("click", windowClickHandle, true);
    };
  }, []);

  //事件处理
  const profileClickHandle = () => {
    console.log(panelShow);
    console.log(!panelShow);
    setPanelShow(!panelShow);
  };

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" ref={profileRef} onClick={profileClickHandle}>
        <IconMenu />
        <div className="avatar">
          <IconAvatar />
        </div>

        {panelShow && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">登录</div>
              <div className="item">登录</div>
              <div className="item">登录</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
