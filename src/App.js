import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
}

export default App;
