import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';
import backfaceImg from '../assets/card-backface.png';

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
    animation: flip-appear .75s;
}

@keyframes flip-appear {
  0% {
    transform: rotateY(0deg);

    opacity: 0;
  }
  50%{
    transform: rotateY(180deg);
    background-image: url(${backfaceImg});
    background-repeat:no-repeat;
    background-position:center;
    background-size: 150px;
    
    
  }
  100% {
    transform: rotateY(0deg);
    opacity: 1;
  }
}

`;

export default GlobalStyle;
