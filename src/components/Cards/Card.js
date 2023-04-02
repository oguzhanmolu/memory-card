import styled, { keyframes } from 'styled-components';

const Card = ({ character, handleCardClick }) => {
  return (
    <CardElement onClick={handleCardClick}>
      <Image
        src={require(`../../assets/characters/${character}.png`)}
        alt={`Image of ${character}`}
      />
      <h2>{character}</h2>
    </CardElement>
  );
};

const flipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
    opacity: 0;
  }
  50% {
    transform: rotateY(90deg);
  }
  100% {
    transform: rotateY(0deg);
    opacity: 1;
  }
`;

const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 200px;
  width: 200px;
  background-color: rgb(40, 40, 40);
  color: white;
  animation: ${flipAnimation} 0.25s;
  cursor: pointer;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  pointer-events: none;
`;

export default Card;
