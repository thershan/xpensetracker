// src/components/AddExpenseForm.js
import React, { useState } from 'react';
import { TextField, Button, MenuItem } from '@mui/material';

const AddExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleAddExpense = () => {
    if (title && amount && category && date) {
      addExpense({ title, amount: parseFloat(amount), category, date });
      setTitle('');
      setAmount('');
      setCategory('');
      setDate('');
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        select
        fullWidth
        margin="normal"
      >
        <MenuItem value="Food">Food</MenuItem>
        <MenuItem value="Transport">Transport</MenuItem>
        <MenuItem value="Entertainment">Entertainment</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </TextField>
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button onClick={handleAddExpense} variant="contained" color="primary">
        Add Expense
      </Button>
    </div>
  );
};

export default AddExpenseForm;
