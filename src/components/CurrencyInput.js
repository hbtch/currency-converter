import React from 'react';
import './CurrencyInput.css'; 

const CurrencyInput = ({ amount, currency, onAmountChange, onCurrencyChange, isDisabled }) => {
  return (
    <div className="currency-input">
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(parseFloat(e.target.value))}
        disabled={isDisabled}
      />
      <select value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
        <option value="RUR">RUR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    </div>
  );
};

export default CurrencyInput;
