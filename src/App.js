import React, { useState, useEffect } from 'react';
import WalletBalance from './components/WalletBalance';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseTrends from './components/ExpenseTrends';
import { loadState, saveState } from './utils/localStorage';
import { SnackbarProvider, useSnackbar } from 'notistack';
import './App.css';

const App = () => {
  const [walletBalance, setWalletBalance] = useState(loadState('walletBalance') || 5000);
  const [expenses, setExpenses] = useState(loadState('expenses') || []);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    saveState('walletBalance', walletBalance);
    saveState('expenses', expenses);
  }, [walletBalance, expenses]);

  const addExpense = (expense) => {
    if (expense.amount > walletBalance) {
      enqueueSnackbar('Insufficient funds', { variant: 'error' });
      return;
    }
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.amount);
  };

  const addIncome = (amount) => {
    setWalletBalance(walletBalance + amount);
  };

  const editExpense = (expense, index) => {
    const newExpenses = [...expenses];
    newExpenses[index] = expense;
    setExpenses(newExpenses);
    // Recalculate the wallet balance
    const totalExpense = newExpenses.reduce((acc, exp) => acc + exp.amount, 0);
    setWalletBalance(5000 - totalExpense); // Assuming initial balance is 5000
  };

  const deleteExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
    // Recalculate the wallet balance
    const totalExpense = newExpenses.reduce((acc, exp) => acc + exp.amount, 0);
    setWalletBalance(5000 - totalExpense); // Assuming initial balance is 5000
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <WalletBalance balance={walletBalance} addIncome={addIncome} />
        <AddExpenseForm addExpense={addExpense} expenses={expenses} />
        <ExpenseList expenses={expenses} editExpense={editExpense} deleteExpense={deleteExpense} />
        <ExpenseSummary expenses={expenses} />
        <ExpenseTrends expenses={expenses} />
      </div>
    </SnackbarProvider>
  );
};

export default App;
