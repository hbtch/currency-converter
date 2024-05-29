import React, { useState, useEffect } from 'react';
import CurrencyInput from './CurrencyInput';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(5000);
  const [currencyFrom, setCurrencyFrom] = useState('RUR');
  const [currencyTo, setCurrencyTo] = useState('USD');
  const [exchangeRate, setExchangeRate] = useState(null); // Инициализация с null
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[currencyTo];
        setExchangeRate(rate);
        setConvertedAmount((amount * rate).toFixed(4));
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
  }, [currencyFrom, currencyTo, amount]);

  return (
    <div className="converter-container">
      <div className="currency-input-container">
        <h2>У меня есть</h2>
        <CurrencyInput
          amount={amount}
          currency={currencyFrom}
          onAmountChange={setAmount}
          onCurrencyChange={setCurrencyFrom}
        />
        {exchangeRate !== null && (
          <p>1 {currencyFrom} = {(1 / exchangeRate).toFixed(4)} {currencyTo}</p>
        )}
      </div>
      <div className="currency-input-container">
        <h2>Хочу приобрести</h2>
        <CurrencyInput
          amount={convertedAmount}
          currency={currencyTo}
          onCurrencyChange={setCurrencyTo}
          isDisabled
        />
        {exchangeRate !== null && (
          <p>1 {currencyTo} = {exchangeRate.toFixed(4)} {currencyFrom}</p>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
