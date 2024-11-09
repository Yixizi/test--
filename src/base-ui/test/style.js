import styled from "styled-components";

export const BrowserWrapper = styled.div`


.swiper-wrapper{
width:60%;
}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;

  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .i-close-btn {
      color: white;
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;

      .btn {
        display: flex;
        justify: center;
        align-items: center;
        width: 83px;
        height: 83px;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        margin: 0 auto;
        user-select: none;
      }
    }
  }

  .fade-enter {
    transform: translateX(100%);
    opacity: 0;
  }
  .fade-enter-active {
    transition: all .2s ease;
    transform: translateX(0);
    opacity: 1;
  }

  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    transition: all .2s ease;
    opacity: 0;
  }

  .indicator {
    height: 100px;
    margin-top: 15px;
  }

`;
