import styled from "styled-components";

export const RoomWrapper = styled.div`
  width: ${(props) => props.$itemWidth};
  box-sizing: border-box;
  padding: 8px;
  flex-shrink: 0;

  .inner {
    width: 100%;

    .cover {
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 8px 0;
        border-radius: 8px;
        overflow: hidden;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

    .slider {
      position: relative;

      &:hover {
        .control {
          display: flex;
        }
      }
      .control {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 0;
        display: none;
        justify-content: space-between;
        bottom: 0;
        color: #fff;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 53px;
          height: 100%;
          background: linear-gradient(
            to left,
            transparent 0%,
            rgba(0, 0, 0, 0.45) 100%
          );
          cursor: pointer;

          &.right {
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.45) 100%
            );
          }
        }
      }
      
    }

    .indicator {
      left: 0;
      right: 0;
      margin: auto;
      position: absolute;
      bottom: 10px;
      width: 30%;

      .dot-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        flex-shrink: 0;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;


          &.active {
            background-color: red;
            width: 8px;
            height: 8px;
          }

          &.cover-opacity{
          opacity:.2;
          }
        }
      }
    }

    .desc {
      margin: 10px 0px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.$verifyColor};
    }
    .price {
      margin: 8px 0;
    }

    .name {
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .button {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.theme.textColor.primaryColor};
      .css-1sagf1d-MuiRating-icon {
        margin-right: -1px;
      }
    }
    .count {
      margin: 0 2px 0 4px;
    }
  }
`;
