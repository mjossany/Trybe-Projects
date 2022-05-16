import React from 'react';
import './App.css';
import MainScreen from './components/MainScreen';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <MainScreen />
    </Provider>
  );
}

export default App;
