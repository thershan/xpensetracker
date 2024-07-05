import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { List, ListItem, ListItemText, IconButton, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const ListContainer = styled(Box)({
  backgroundColor: '#444',
  color: '#fff',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  margin: '10px',
});

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  return (
    <ListContainer>
      <Typography variant="h5">Recent Transactions</Typography>
      <List>
        {expenses.map((expense, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${expense.title} - ₹${expense.amount}`}
              secondary={`${expense.category} - ${expense.date}`}
            />
            <IconButton onClick={() => editExpense(expense, index)}>
              <FaEdit style={{ color: '#fff' }} />
            </IconButton>
            <IconButton onClick={() => deleteExpense(index)}>
              <FaTrash style={{ color: '#fff' }} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </ListContainer>
  );
};

export default ExpenseList;
