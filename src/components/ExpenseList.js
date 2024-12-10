import React from 'react';

const ExpenseList = ({ expenses = [] }) => {
  return (
    <ul>
      {(expenses || []).map((expense) => (
        <li key={expense.id}>
          {expense.name}: ${expense.amount.toFixed(2)}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
