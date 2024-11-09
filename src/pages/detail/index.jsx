import { memo, useEffect } from "react";
import { DetailWrapper } from "./style";
import DetailPictures from "./detail-pictures";
import { changeHeaderConfig } from "@/store/modules/main.js";
import DetailInfo from "./detail-infos";
import { useDispatch } from "react-redux";

const Detail = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfig({ isFixed: true, topAlpha: false }));
  }, [dispatch]);
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfo />
    </DetailWrapper>
  );
});

export default Detail;
