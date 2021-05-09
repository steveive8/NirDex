import React from 'react';
import Trade from './components/trade';
import GlobalStyles from './styles/GlobalStyle';
import Header from './components/header'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Header />
        <div style={{paddingTop: 80, height: '100vh', width: '100vw'}}>
          <Trade />
        </div>
      </div>
    </>
  )
};

export default App;