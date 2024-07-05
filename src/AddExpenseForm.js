import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Modal, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled(Box)({
  backgroundColor: '#444',
  color: '#fff',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  margin: '10px',
});

const AddExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);

  const handleAddExpense = () => {
    if (title && amount && category && date) {
      addExpense({ title, amount: parseFloat(amount), category, date });
      setTitle('');
      setAmount('');
      setCategory('');
      setDate('');
      setOpen(false);
    }
  };

  return (
    <FormContainer>
      <Typography variant="h5">Expenses: ₹{totalExpenses()}</Typography>
      <Button onClick={() => setOpen(true)} variant="contained" color="error">
        + Add Expense
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', margin: '100px auto', maxWidth: '400px' }}>
          <Typography variant="h6">Add Expense</Typography>
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
          <Button onClick={handleAddExpense} variant="contained" color="error" fullWidth>
            Add Expense
          </Button>
        </Box>
      </Modal>
    </FormContainer>
  );
};

const totalExpenses = (expenses) => {
  return expenses.reduce((acc, expense) => acc + expense.amount, 0);
};

export default AddExpenseForm;
