import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const SummaryContainer = styled(Box)({
  backgroundColor: '#444',
  color: '#fff',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  margin: '10px',
});

const ExpenseSummary = ({ expenses }) => {
  const data = expenses.reduce((acc, expense) => {
    const existing = acc.find((item) => item.name === expense.category);
    if (existing) {
      existing.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <SummaryContainer>
      <Typography variant="h5">Expense Summary</Typography>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </SummaryContainer>
  );
};

export default ExpenseSummary;
