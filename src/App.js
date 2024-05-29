import React from 'react';
import CurrencyConverter from './components/CurrencyConverter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="currency-container">
        <h1>Currency Converter</h1>
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
