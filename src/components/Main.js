import styled from 'styled-components';
import char1 from '../assets/characters/char3.png';
import char2 from '../assets/characters/char5.png';

const Main = () => {
  const test = (e) => {
    console.log(e.target);
    e.target.classList.add('flip-animation');
    e.target.style.backgroundImage = `url(${char2})`;
  };
  return (
    <MainWrapper>
      <MainText>
        Get points for choosing a card, but don't click on the same card more
        than once!
      </MainText>
      <div>
        <ScoreElement>CURRENT SCORE</ScoreElement>
        <ScoreElement>HIGHEST SCORE</ScoreElement>
      </div>

      <CardWrapper>
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>{' '}
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>
        <Card
          onClick={test}
          style={{ backgroundImage: `url(${char1})` }}
        ></Card>
      </CardWrapper>
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

const MainText = styled.p`
  font-size: 2.25rem;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px;
`;

const Card = styled.div`
  height: 200px;
  width: 200px;
  background-color: rgb(40, 40, 40);
  cursor: pointer;
`;

const Img = styled.img`
  background-color: rgb(40, 40, 40);
  border-radius: 5px;
  height: 200px;
  width: 200px;
  padding: 25px;
`;

const ScoreElement = styled.span`
  height: 75px;
  padding: 15px;
  margin: 25px 0 50px 10px;
  background-color: rgb(40, 40, 40);
  color: white;
  font-size: 1.5rem;
`;
