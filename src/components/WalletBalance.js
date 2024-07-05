import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Modal } from '@mui/material';
import { styled } from '@mui/system';

const WalletContainer = styled(Box)({
  backgroundColor: '#444',
  color: '#fff',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  margin: '10px',
});

const WalletBalance = ({ balance, addIncome }) => {
  const [amount, setAmount] = useState('');
  const [open, setOpen] = useState(false);

  const handleAddIncome = () => {
    if (amount) {
      addIncome(parseFloat(amount));
      setAmount('');
      setOpen(false);
    }
  };

  return (
    <WalletContainer>
      <Typography variant="h5">Wallet Balance: ₹{balance.toFixed(2)}</Typography>
      <Button onClick={() => setOpen(true)} variant="contained" color="success">
        + Add Income
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', margin: '100px auto', maxWidth: '400px' }}>
          <Typography variant="h6">Add Balance</Typography>
          <TextField
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Income Amount"
            fullWidth
            margin="normal"
          />
          <Button onClick={handleAddIncome} variant="contained" color="success" fullWidth>
            Add Balance
          </Button>
        </Box>
      </Modal>
    </WalletContainer>
  );
};

export default WalletBalance;
