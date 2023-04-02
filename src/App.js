import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  return (
    <SectionWrapper>
      <Header />
      <Main />
      <Footer />
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  height: 100vh;
`;

export default App;
