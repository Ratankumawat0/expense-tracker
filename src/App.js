// src/App.js
import React, { useState, useEffect } from 'react';
import Wallet from './components/Wallet';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseTrends from './components/ExpenseTrends';
import { saveToLocalStorage, loadFromLocalStorage } from './utils/localStorageHelpers';
import './App.css';



const expenses = loadFromLocalStorage("expenses") || [];



const App = () => {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState(loadFromLocalStorage('expenses'));

  useEffect(() => {
    saveToLocalStorage('expenses', expenses);
    saveToLocalStorage('walletBalance', walletBalance);
  }, [expenses, walletBalance]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.amount);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    const deletedAmount = updatedExpenses.splice(index, 1)[0].amount;
    setExpenses(updatedExpenses);
    setWalletBalance(walletBalance + deletedAmount);
  };

  const editExpense = (index) => {
    const updatedExpenses = [...expenses];
    const newAmount = prompt("Enter new amount:", updatedExpenses[index].amount);
    if (newAmount) {
      updatedExpenses[index].amount = parseFloat(newAmount);
      setExpenses(updatedExpenses);
    }
  };

  return (
    <div>
      <Wallet addIncome={setWalletBalance} />
      <AddExpenseForm addExpense={addExpense} balance={walletBalance} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} editExpense={editExpense} />
      <ExpenseSummary expenses={expenses} />
      <ExpenseTrends expenses={expenses} />
    </div>
  );
};

export default App;
