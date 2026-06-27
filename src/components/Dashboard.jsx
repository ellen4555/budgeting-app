import "../styles/Dashboard.css";

function Dashboard({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expense;

  return (
    <div className="dashboard">
      <div className="card balance">
        <h3>Total Balance</h3>
        <h2>₹{balance}</h2>
      </div>

      <div className="card income">
        <h3>Total Income</h3>
        <h2>₹{income}</h2>
      </div>

      <div className="card expense">
        <h3>Total Expense</h3>
        <h2>₹{expense}</h2>
      </div>
    </div>
  );
}

export default Dashboard;