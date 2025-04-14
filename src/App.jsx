import { useState } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Grocery shopping",
      amount: 85.20,
      date: "2025-04-08",
      category: "Food"
    },
    {
      id: 2,
      description: "Monthly rent",
      amount: 1200.00,
      date: "2025-04-01",
      category: "Housing"
    },
    {
      id: 3,
      description: "Gas bill",
      amount: 45.50,
      date: "2025-04-05",
      category: "Utilities"
    }
  ]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="expense-tracker-container">
      <h1>Expense Tracker</h1>
      <div className="expense-tracker-content">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList 
          expenses={expenses} 
          onDeleteExpense={handleDeleteExpense} 
        />
      </div>
    </div>
  )
}

export default App
