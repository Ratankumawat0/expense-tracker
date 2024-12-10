import React from 'react';

const ExpenseTrends = ({ expenses = [] }) => {
  // Ensure `expenses` is always an array
  const trends = (expenses || []).reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(trends).map(([category, amount]) => (
        <p key={category}>
          {category}: ${amount.toFixed(2)}
        </p>
      ))}
    </div>
  );
};

export default ExpenseTrends;
