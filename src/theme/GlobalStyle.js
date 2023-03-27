import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';
import char1 from '../assets/characters/char3.png';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Bangers', sans-serif;
    
}


.fa-flip{
    font-size: 4rem;
    animation-duration:7.5s;
    cursor: pointer;
    color: rgb(40, 40, 40);
}

.flip-animation{
    transition: all ease-out .5s;
    transform: rotateY(180deg);
    animation: appear .75s;
}

@keyframes appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

`;

export default GlobalStyle;
