import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <Counter duration={8 * 24 * 60 * 60 * 1000} />
  );
}

export default App;
