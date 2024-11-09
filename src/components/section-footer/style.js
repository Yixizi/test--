import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .info{
  cursor:pointer;
  display:flex;
  align-items:center;
  font-size:17px;
  color:${props=>props.color};
  font-weight:700;

  &:hover{
  text-decoration:underline;
  }

  .text{
  margin-right:6px;

  }


  
  }
`;
