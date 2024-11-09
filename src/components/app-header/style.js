import styled from "styled-components";

export const HeaderWrapper = styled.div`
  font-size: 14px;
  z-index: 99;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    background-color: ${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};
    z-index: 99;
    padding: 0 30px;
    transition: all 0.25s ease;
    border-bottom: 1px solid #eee;
    border-bottom-color: ${(props) =>
      props.theme.isAlpha ? "rgba(235,235,235,0)" : "rgba(235,235,235,1)"};

    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const SearchAreaWrapper = styled.div`
  transition: height 0.25s ease;
  height: ${(props) => (props.$isSearch ? "100px" : "0")};
`;
