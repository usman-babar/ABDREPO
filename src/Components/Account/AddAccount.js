import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Create_Account } from "../../APIs/api.js";
import "../App.css";

const defaultValue = {
  account_number: "",
  balance: "",
  account_type: "",
  username: "",
};

export default function Add_New() {
  const [Account, setAccount] = useState(defaultValue);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setAccount({ ...Account, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateFields = () => {
    const newErrors = {};

    if (Account.account_number.trim() === "") {
      newErrors.account_number = "Account number is required";
    }

    if (Account.account_type.trim() === "") {
      newErrors.account_type = "Account type is required";
    }

    if (Account.username.trim() === "") {
      newErrors.username = "username is required";
    }

    if (Number(Account.balance) <= 0) {
      newErrors.balance = "Amount Negative";
    } else if (String(Account.balance).trim() === "") {
      newErrors.balance = "Amount is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const Add_Acc = async () => {
    if (!validateFields()) {
      return;
    }

    await Create_Account(Account);
    navigate("/");
  };

  return (
    <div>
      <div className="add-account-container">
        <div className="submission-container-s">
          <h4 style={{fontSize: "28px"}}>Create New Account</h4>
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
          <div className="form-control">
            <label>Balance</label>
            <input type="text" onChange={onValueChange} name="balance" />
            {errors.balance && (
              <span className="form-error">{errors.balance}</span>
            )}
          </div>
          <div className="form-control">
            <label>Account Type</label>
            <input
              type="text"
              onChange={onValueChange}
              name="account_type"
            />
            {errors.account_type && (
              <span className="form-error">{errors.account_type}</span>
            )}
          </div>
          <div className="form-control">
            <label>Username</label>
            <input type="text" onChange={onValueChange} name="username" />
            {errors.username && (
              <span className="form-error">{errors.username}</span>
            )}
          </div>
          <div className="form-control">
            <button onClick={Add_Acc} >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
