import React, { useState, useEffect } from 'react';

const Wallet = () => {
  const [balance, setBalance] = useState(
    parseFloat(localStorage.getItem('walletBalance')) || 5000
  );

  const addIncome = (amount) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    localStorage.setItem('walletBalance', newBalance);
  };

  return (
    <div className="wallet">
      <h2>Wallet Balance: ${balance}</h2>
      <button onClick={() => addIncome(1000)}>Add $1000</button>
    </div>
  );
};

export default Wallet;
