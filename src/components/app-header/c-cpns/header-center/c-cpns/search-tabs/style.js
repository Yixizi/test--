import styled from "styled-components";

export const SearchTabsWrapper = styled.div`
  display: flex;
  position: relative;
  color: ${(props) => (props.theme.isAlpha ? "#fff" : "#222")};
  z-index: 99;
  justify-content:space-between;
  width:150px;

  .item {
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor:pointer;

    &.active .bottom {
      position: absolute;
      top: 28px;
      left: 0;
      width: 64px;
      background-color: ${(props) => (props.theme.isAlpha ? "#fff" : "#333")};
      height: 2px;
    }
  }
`;
