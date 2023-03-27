import styled from 'styled-components';
import headerImg from '../assets/header-img.png';
import headerImg2 from '../assets/header-img2.png';
import headerIcon from '../assets/header-icon.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={headerImg} />
      <img src={headerIcon} />
      <img src={headerImg2} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 20px;
  background-color: rgb(40, 40, 40);
`;

export default Header;
