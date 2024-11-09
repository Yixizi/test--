import React, { memo } from "react";
import { LeftWrapper } from "./style";
import Logo from "../../../../assets/svg/icon-logo";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  const logoClickHandle = () => {
    navigate("/home");
  };
  return (
    <LeftWrapper>
      <div className="logo" onClick={(e) => logoClickHandle()}>
        <Logo width="30" />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
