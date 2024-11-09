import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  color: red;
  display: flex;
  align-items: center;

  .logo {
    cursor: pointer;
    margin-left: 30px;

    path {
      fill: ${(props) =>
        props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};
      width: 35px;
      height: 35px;
    }
  }
`;
