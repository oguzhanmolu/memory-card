import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bangers', sans-serif;
    
    
}


.fa-flip{
    font-size: 3rem;
    color: white;
    animation-duration:7.5s;
    cursor: pointer;
}

`;

export default GlobalStyle;
