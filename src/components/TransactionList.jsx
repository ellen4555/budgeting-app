import "../styles/Transaction.css";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="transaction-container">
      <h2>Transaction History</h2>

      {transactions.length === 0 ? (
        <p>No transactions added yet.</p>
      ) : (
        <ul>
          {transactions.map((transaction, index) => (
            <li
              key={index}
              className={
                transaction.type === "Income"
                  ? "income-item"
                  : "expense-item"
              }
            >
              <div>
                <h3>{transaction.title}</h3>
                <p>{transaction.category}</p>
                <small>{transaction.date}</small>
              </div>

              <div className="actions">
                <span>
                  {transaction.type === "Income" ? "+" : "-"}₹
                  {transaction.amount}
                </span>

                <button
                  className="delete-btn"
                  onClick={() => deleteTransaction(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;