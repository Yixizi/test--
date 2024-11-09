import styled from "styled-components";

export const SearchInfoWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  border: 1px solid #ccc;
  padding: 15px 10px 15px;
  border-radius: 50px;
  position: relative;
  z-index: 0;
  background-color: ${(props) => (props.theme.isAlpha ? "#fff" : "#fff")};

  .item {
    width: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #ccc;

    &:last-child {
      border-right: none;
    }

    .title {
      font-size: 13px;
      font-weight: 700;
    }
  }
`;
