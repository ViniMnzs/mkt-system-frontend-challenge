import React from 'react';
import Menu from './components/Menu';
import Main from './components/Main';
import Auth from './components/Authentication';
import './assets/styles/global.css';

function App() {
  return (
    <>
      <Menu />
      <Main />
      <Auth />
    </>
  );
}

export default App;
