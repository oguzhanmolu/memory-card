import { useState, useEffect } from 'react';
import { shuffleArr } from '../utils';
import styled from 'styled-components';
import GameDescription from './GameDescription';
import Scoreboard from './Scoreboard';
import CardsGrid from './Cards/CardsGrid';

const Main = () => {
  // Hooks
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  // Initial card load
  useEffect(() => {
    createCardObjects();
  }, []);

  // Create new character objects
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

    setCards(tempArray);
    return cards;
  };

  // Handle card clicks
  const handleCardClick = (e) => {
    // Get clicked card text, then handle play round
    const clickedCard = e.target.lastChild.textContent;
    playRound(clickedCard);

    // Shuffle cards on click
    setCards(shuffleArr(createCardObjects()));
  };

  // Play round
  const playRound = (clickedCard) => {
    cards.find((card) => {
      // If score-> Set card.isClicked=true/Update scoreboard
      if (card.characterName === clickedCard && card.isClicked === false) {
        card.isClicked = true;
        updateScoreboard();
      }

      // If game over-> Reset the game
      else if (card.characterName === clickedCard && card.isClicked === true) {
        resetGame();
      }
    });
  };

  // Update Scoreboard
  const updateScoreboard = () => {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);
    if (newScore > highestScore) setHighestScore(newScore);
  };

  // Reset the game
  const resetGame = () => {
    setCurrentScore(0);
    const newArray = [...cards];
    newArray.map((card) => (card.isClicked = false));
    setCards(newArray);
  };

  return (
    <MainWrapper>
      <GameDescription />
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <CardsGrid cards={cards} handleCardClick={handleCardClick} />
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export default Main;
