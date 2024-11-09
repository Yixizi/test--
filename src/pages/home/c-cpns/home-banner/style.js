import style from "styled-components";
import coverImg from "@/assets/img/cover_01.jpeg";


// background: url(${require("@/assets/img/cover_01.jpeg").default}) center center / cover no-repeat;

export const BannerWrapper = style.div`
    background: url(${coverImg}) center center / cover no-repeat;
    
    height: 529px;
`;
