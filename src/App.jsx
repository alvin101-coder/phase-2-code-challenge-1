import { useState } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Coffee at Java",
      amount: 300,
      date: "2028-11-10",
      category: "Food & Drinks"
    },
    {
      id: 2,
      description: "Ride to Westlands",
      amount: 1500,
      date: "2028-11-09",
      category: "Transportation"
    },
    {
      id: 3,
      description: "Phone bill payment",
      amount: 4000,
      date: "2028-11-08",
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
