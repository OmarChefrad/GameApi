import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        user-select: none;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.4rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
    background: white;
    }
    }
    body{
        font-family: 'Manrope', sans-serif;
        width: 100%;
    }
    h1{
        font-size: 4rem;
        color: #333;
    }
    h2{
        font-size: 3rem;
        font-weight: lighter;
        color: #333;
        padding-top:0rem ;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 0.7rem 0rem
    }
    p{
        font-size: 1.1rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
`

export default GlobalStyles;
