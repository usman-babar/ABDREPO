import React, { useEffect, useState } from "react";
import { gettransactions } from "../../APIs/api.js";
import "../App.css";

export default function View_Transac() {
  const [transactions, setTransactions] = useState([]);
  const [errors, setErrors] = useState({});
  const [Account, setAccount] = useState({ account_number: "" });
  const [showTable, setShowTable] = useState(false); // State variable to track table visibility

  const onValueChange = (e) => {
    setAccount({ ...Account, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateFields = () => {
    const newErrors = {};

    if (Account.account_number.trim() === "") {
      newErrors.account_number = "Account number is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const getAllTransactions = async () => {
    const isValid = validateFields();
    if (!isValid) {
      return;
    }

    try {
      const response = await gettransactions(Account);
      setTransactions(response.data.transactions);
      setShowTable(true); // Show the table when transactions are fetched successfully
    } catch (error) {
      console.log("Error while fetching transactions:", error);
    }
  };

  return (
    <div
      className="withdrawal-container"
    >
      <div className="submission-container">
        <h4>View Transactions</h4>
        <div className="form-control">
          <label>Account number</label>
          <input
            type="text"
            onChange={onValueChange}
            name="account_number"
          />
          {errors.account_number && (
            <span className="form-error">{errors.account_number}</span>
          )}
        </div>
        <button
          onClick={getAllTransactions}
          style={{ backgroundColor: " rgb(30, 87, 73)", color: "white", marginTop: "13px" }}
        >
          View Transactions
        </button>

        {showTable && ( // Conditionally render the table based on the showTable state
          <table className="styled-table">
            <thead>
              <tr className="table-head">
                <th align="center">Amount</th>
                <th align="center">Type</th>
                <th align="center">Date</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td align="center">{transaction.amount}</td>
                  <td align="center">{transaction.type}</td>
                  <td align="center">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
