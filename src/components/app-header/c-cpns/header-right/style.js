import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size:14px
  font-weight: 600;
  color:${(props) => props.theme.textColor.primaryColor};

  .btns {
    display: flex;
    color:${(props) =>
      props.theme.isAlpha ? "#fff" : props.theme.textColor.primaryColor};

    .btn{
    padding:12px 18px;
    align-items: center;
    display: flex;
    cursor: pointer;
    border-radius:20px;

    &:hover{
    background-color:${(props) =>
      props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5"}
    };
    }
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content:space-between;
    gap:8px ;
    border:1px solid #ccc;
    border-radius:50px;
    padding:6px 15px;
    box-sizing:border-box;
    position:relative;
    user-select:none;
    color:${(props) => props.theme.textColor.secondaryColor};

    ${(props) => props.theme.mixin.boxShadow};



    .avatar {
      width: 32px;
      height: 32px;
      path{
      fill: #888888;
      }
    }
    .panel{
      display:flex;
      flex-direction:column;
      position:absolute;
      right:0px;
      top:60px;
      width:240px;
      background-color:#fff;
      box-shadow:0 0 2px rgba(0,0,0,0.2);
      border:1px solid #ccc;
      border-radius:10px;

      .top,.bottom{
      padding:10px 0;



      .item{
      height:30px;
      line-height:30px;
      padding:0 16px;

      &:hover{
      background-color:#f5f5f5;
      }

      }


      }
      .top{
      border-bottom:1px solid #ccc;
      
      }
    }

  }
`;
