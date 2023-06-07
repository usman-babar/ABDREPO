import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

import { Withdraw_Money } from "../../APIs/api.js";
import ErrorPopup from "../ErrorPopup";

const defaultValue = {
  account_number: "",
  amount: 0,
};

export default function Withdrawal() {
  const [account, setAccount] = useState(defaultValue);
  const [errors, setErrors] = useState({});
  const [errorPopupOpen, setErrorPopupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateFields = () => {
    const newErrors = {};

    if (account.account_number.trim() === "") {
      newErrors.account_number = "Account number is required";
    }

    if (String(account.amount).trim() === "") {
      newErrors.amount = "Amount is required";
    } else if (Number(account.amount) <= 0) {
      newErrors.amount = "Amount can't be negative";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const closeErrorPopup = () => {
    setErrorPopupOpen(false);
    setErrorMessage("");
  };

  const withdrawMoney = async () => {
    if (!validateFields()) {
      return;
    }
  
    try {
      const response = await Withdraw_Money(account);
      console.log("response is ",response)
      console.log("response.data  is ",response.data)
      console.log("response.data.errro is ",response.data.error)
      
      if (response && response.data && response.data.error) {
        setErrorPopupOpen(true);
        setErrorMessage(response.data.error);
        console.error("Withdrawal failed:", response.data.error);
      } else {
        navigate("/");
      }
    } catch (error) {
      setErrorPopupOpen(true);
      setErrorMessage("Withdrawal failed. Please try again later.");
      console.error("Withdrawal failed:", error);
    }
  };
  

  return (
    <div>
      <div className="withdrawal-container">
        <div className="submission-container">
          <h4>Withdraw Money</h4>
          <div className="form-group">
            <label htmlFor="account_number">Account number</label>
            <input
              type="text"
              id="account_number"
              name="account_number"
              onChange={onValueChange}
            />
            {errors.account_number && (
              <p className="error-message">{errors.account_number}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              onChange={onValueChange}
            />
            {errors.amount && (
              <p className="error-message">{errors.amount}</p>
            )}
          </div>
          <button className="withdraw-button" onClick={withdrawMoney}>
            Withdraw
          </button>
        </div>
      </div>
      {errorPopupOpen && (
        <ErrorPopup
          isOpen={errorPopupOpen}
          onClose={closeErrorPopup}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
}
