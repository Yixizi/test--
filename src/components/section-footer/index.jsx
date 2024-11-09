import PropTypes from "prop-types";
import React, { memo } from "react";
import { FooterWrapper } from "./style";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const SectionFooter = memo((props) => {
  const { name ,to='/entire' } = props;

  ///
  let showName='显示全部'
  if(name){
    showName=`显示更多${name}房源`
  }

  //
  const navigate=useNavigate()
  const moreClickHandle=()=>{
      navigate(to)
  }


  return (
    <FooterWrapper>
      <div className="info" onClick={moreClickHandle}>
        <div className="text" color={name?'#00484a':'#000'}>{showName}</div>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  );
});

SectionFooter.propTypes = {
  name: PropTypes.string,
  to:PropTypes.string
};

export default SectionFooter;
