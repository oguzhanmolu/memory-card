import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <a href='https://github.com/oguzhanmolu' target='_blank'>
        <i className='fa-brands fa-github fa-flip'></i>
      </a>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgb(40, 40, 40);
`;
