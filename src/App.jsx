import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };
  const deleteTransaction = (index) => {
  const updatedTransactions = transactions.filter((_, i) => i !== index);
  setTransactions(updatedTransactions);
};

  return (
    <div className="app">
      <header className="header">
        <h1>💰 Budget Tracker</h1>
        <p>Track your income and expenses effortlessly</p>
      </header>

      <Dashboard transactions={transactions} />

      <AddTransaction addTransaction={addTransaction} />
      <TransactionList transactions={transactions} 
      deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;