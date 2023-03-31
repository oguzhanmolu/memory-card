import styled from 'styled-components';

const MainText = () => {
  return (
    <TextElement>
      Get points for choosing a card, but don't click on the same card more than
      once!
    </TextElement>
  );
};

const TextElement = styled.p`
  font-size: 2.25rem;
  font-weight: bold;
`;

export default MainText;
