import style from 'styled-components'

export const FooterWrapper = style.div`
border-top:1px solid #d3d3d3;

.footer{

display: flex;
    width:60%;
    margin:0 auto 50px;
    box-sizing:border-box;
    justify-content:space-between;
    padding:30px 0 10px 0;
    border-bottom:1px solid #d3d3d3;

    .list{
    display: flex;
    flex-direction:column;
    box-sizing:border-box;
    text-align:center;
    cursor:default;

    .title{
        margin-bottom:12px;
    
    }
    }

    ul{
    display: flex;
    flex-direction:column;
    box-sizing:border-box;


    li{
    height: 25px;
    line-height:25px;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:12px;

    a{
    box-sizing:border-box;
    position:relative;

    &:before{
        content:'';
        position:absolute;
        bottom:0;
        border-bottom:none;
        border-bottom:1px solid red;
        width:0;
        transition:all .3s;

    }

    &:hover::before{
        width:100%;

    }
    }
    }

    }

}
    
`
