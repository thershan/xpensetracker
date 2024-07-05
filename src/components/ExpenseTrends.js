import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const TrendsContainer = styled(Box)({
  backgroundColor: '#444',
  color: '#fff',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  margin: '10px',
});

const ExpenseTrends = ({ expenses }) => {
  const data = expenses.reduce((acc, expense) => {
    const existing = acc.find((item) => item.category === expense.category);
    if (existing) {
      existing.amount += expense.amount;
    } else {
      acc.push({ category: expense.category, amount: expense.amount });
    }
    return acc;
  }, []);

  return (
    <TrendsContainer>
      <Typography variant="h5">Top Expenses</Typography>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="category" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </TrendsContainer>
  );
};

export default ExpenseTrends;
