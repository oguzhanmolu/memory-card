import styled from 'styled-components';

const Card = ({ character, handleCardClick }) => {
  return (
    <CardElement className='card-element' onClick={handleCardClick}>
      <Image
        src={require(`../../assets/characters/${character}.png`)}
        alt='Super Smash character image'
      />
      <h2>{character}</h2>
    </CardElement>
  );
};

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
  cursor: pointer;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  background-color: rgb(40, 40, 40);
  color: white;
`;

export default Card;
