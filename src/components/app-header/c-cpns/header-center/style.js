import styled from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 12px;
    border-radius: 24px;
    border: 1px solid #ddd;
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow}

    .text {
      padding: 0 16px;
      color: #222;
      font-weight: 700;
      letter-spacing:1.5px;
      color: ${(props) =>
        props.theme.isAlpha ? "#fff" : props.theme.textColor.primaryColor};
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${(props) => props.theme.color.primaryColor};
    }
  }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;

    .infos {
      position: absolute;
      top: 35px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  .detail-exit-active {
    transform: scale(0.35, 0.73) translateY(-38px);
    transition: all 0.25s ease;
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.75, 0.73) translateY(-38px);
    opacity: 0.5;
  }

  .detail-enter-active {
    transform: scale(1) translateY(0);
    transition: all 0.25s ease;
    opacity: 1;
  }

  .bar-enter {
    transform: scale(2.85, 1.33) translateY(38px);
    opacity: 0;
  }
  .bar-enter-active {
    transition: all 0.25s ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .bar-exit-active {
    transition: all 0.25s ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  .bar-exit {
    opacity: 0;
    transform: scale(2.85, 1.33) translateY(38px);
  }
`;
