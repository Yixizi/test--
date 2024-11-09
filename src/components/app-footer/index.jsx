import React, { memo } from "react";

import { FooterWrapper } from "./style";
import footerData from "@/assets/data/footer.json";

const Footer = memo(() => {


  return (
    <FooterWrapper>
     <div className="footer">
     {footerData.map((item) => {
        const list = item.list.map((e) => {
          return <li key={e}><a href="/">{e}</a></li>;
        });
        return (
         <div key={item.name} className="list">
          <div className="title" > {item.name}</div>
          <ul key={item.name}>{list}</ul>
        </div>
        );
      })}
     </div>
        
  
    </FooterWrapper>
  );
});

export default Footer;
