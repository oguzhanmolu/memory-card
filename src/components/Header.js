import styled from 'styled-components';
import headerImg from '../assets/header-img.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={headerImg} />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
