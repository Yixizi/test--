import styled from "styled-components";

export const PicturesWrapper = styled.div`
  margin-top: 81px;
  > .pictures {
    display: flex;
    height: 600px;
    background-color: #000;

    &:hover {
      .cover {
        opacity: 1 !important;
      }

      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }

    .left,
    .right {
      width: 50%;
      height: 100%;

      .item {
        position: relative;
        height: 100%;
        overflow: hidden;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition: transform 0.3s ease-in;
        }

        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          opacity: 0;
          transition: opacity 0.1s ease;
        }

        &:hover {
          img {
            transform: scale(1.05);
          }
        }
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        height: 50%;
        box-sizing: border-box;
        border: 1px solid #000;
      }
    }
  }

  .show-btn {
    background-color: #fff;
    position: absolute;
    right: 2%;
    bottom: 3%;
    width: 6%;
    height: 5%;
    border-radius: 4px;
    transition: all 0.2s ease;
    box-sizing: border-box;
    font-size: 16px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      opacity: 1;
      font-size: 18px;
    }
  }
`;
