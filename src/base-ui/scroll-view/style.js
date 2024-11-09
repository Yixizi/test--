import styled from "styled-components";

export const ViewWrapper = styled.div`
  padding: 8px 0;
  position: relative;

  .scroll {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 300ms ease;
    }
  }

  .left {
    border-radius: 50px;
    width: 30px;
    height: 30px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 1px solid #ccc;

    &:hover {
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
      scale: 1.05;
    }
  }
  .right {
    border-radius: 50px;
    width: 30px;
    height: 30px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    z-index: 1;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 1px solid #ccc;

    &:hover {
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
      scale: 1.05;
    }
  }
`;
