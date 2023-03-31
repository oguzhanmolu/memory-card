import styled from 'styled-components';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';

const CardsGrid = ({ cards, handleCardClick }) => {
  const characterCards = cards.map((card) => (
    <Card
      handleCardClick={handleCardClick}
      key={uuidv4()}
      character={card.characterName}
    />
  ));

  return <CardWrapper>{characterCards}</CardWrapper>;
};

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px;

  @media (max-width: 1450px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default CardsGrid;
