import styled from 'styled-components';
import GameDescription from './GameDescription';
import Scoreboard from './Scoreboard';
import CardsGrid from './Cards/CardsGrid';
import { useState, useEffect } from 'react';
import { shuffleArr, handleAnimation } from '../utils';

const Main = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadCards = async () => await createCardObjects();
    loadCards();
  }, []);

  const createCardObjects = () => {
    const tempArray = [];
    const characters = [
      'banjo-kazooie',
      'bowser',
      'captain-falcon',
      'daisy',
      'diddy-kong',
      'duck-hunt',
      'hero',
      'ike',
      'incineroar',
      'isabelle',
      'juggly-puff',
      'link',
      'luigi',
      'mario',
      'peach',
      'pikachu',
      'piranha-plant',
      'wario',
    ];

    characters.forEach((character) => {
      const characterName = character;
      const isClicked = false;
      tempArray.push({ characterName, isClicked });
    });

    setCards(...cards, tempArray);
  };

  const handleCardClick = (e) => {
    const clickedCard = e.target.lastChild.textContent;
    cards.map((card) => {
      if (card.characterName === clickedCard && card.isClicked === true)
        return alert('game ova');

      if (card.characterName === clickedCard && card.isClicked === false)
        card.isClicked = true;
    });

    const cardElements = document.querySelectorAll('.card-element');
    handleAnimation(cardElements);
    console.log(cards);
  };

  return (
    <MainWrapper>
      <GameDescription />
      <Scoreboard />
      <CardsGrid cards={cards} handleCardClick={handleCardClick} />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
