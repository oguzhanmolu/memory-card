import styled from 'styled-components';

const GameDescription = () => {
  return (
    <TextElement>Don't click on the same card more than once!</TextElement>
  );
};

const TextElement = styled.span`
  font-size: 2.25rem;
  font-weight: bold;
`;

export default GameDescription;
