import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;

    --color-grey-100: #333333;
    --color-grey-50: #828282;
    --color-grey-20: #E0E0E0;
    --color-grey-0: #F5F5F5;

    --color-white: #ffffff;

    --feadback-negative: #E60000;
    --feadback-warning: #FFCD07;
    --feadback-sucess: #168821;
    --feadback-information: #155BCB;
}
main{
    overflow-x: hidden;
}

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    button{
        cursor: pointer;
        outline: none;
        background: transparent;
    }

    ul, ol, li{
        list-style: none;
    }

    img{        
        max-width: 100%;
        max-height: 100%;
    }

    input, select{
        background: transparent;
        outline: none;
    } 


`;
