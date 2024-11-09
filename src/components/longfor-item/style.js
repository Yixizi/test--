import styled from "styled-components";

export const LongforItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;

  .inner {
    position: relative;
    padding:8px;

    .cover {
      position: relative;
      width: 100%;
      border-radius:3px;
  
    }
    .bg-cover {
      position: absolute;
      bottom: 0;
      height: 60%;
      width: 100%;
      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0) 3%,
        rgb(0, 0, 0) 100%
      );
    }

    .info {
      color: #fff;
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translateX(-50%);

      .city{
      display:flex;
      text-align:center;
      justify-content:center;
      font-size:20px;
      white-space:nowrap;

      }

      .price{
      margin-top:5px;
      font-size:15px;
      }
    }
  }
`;
