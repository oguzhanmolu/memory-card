import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export default App;
