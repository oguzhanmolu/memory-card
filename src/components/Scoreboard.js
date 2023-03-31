import styled from 'styled-components';

const ScoreElement = () => {
  return (
    <div>
      <TextElement>CURRENT SCORE</TextElement>
      <TextElement>HIGHEST SCORE</TextElement>
    </div>
  );
};

const TextElement = styled.span`
  height: 75px;
  padding: 15px;
  margin: 25px 0 50px 10px;
  background-color: rgb(40, 40, 40);
  color: white;
  font-size: 1.5rem;
`;

export default ScoreElement;
