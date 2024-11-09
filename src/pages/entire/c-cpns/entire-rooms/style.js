import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
  margin-top: 60px;
  padding: 30px 20px;
  position: relative;

  .title {
    padding-left: 10px;
    font-weight: 700;
    font-size: 22px;
    color: #222;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
