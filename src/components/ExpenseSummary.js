import React from 'react';
import { PieChart, Pie } from 'recharts';
import './ExpenseSummary.css';

const ExpenseSummary = ({ expenses = [] }) => {
  // Ensure `expenses` is always an array
  const data = (expenses || []).reduce((acc, expense) => {
    const existing = acc.find((item) => item.name === expense.category);
    if (existing) {
      existing.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
};

export default ExpenseSummary;
