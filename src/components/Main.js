import styled from 'styled-components';

const Main = () => {
  return (
    <MainWrapper>
      <div>
        <ScoreElement>CURRENT SCORE:</ScoreElement>
        <ScoreElement>HIGHEST SCORE:</ScoreElement>
      </div>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScoreElement = styled.span`
  height: 75px;
  padding: 15px;
  margin: 25px 0 0 10px;
  background-color: rgb(40, 40, 40);
  color: white;
  font-size: 1.5rem;
  border-radius: 5px;
`;
