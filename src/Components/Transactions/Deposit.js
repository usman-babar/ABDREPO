import { Deposit_Money } from "../../APIs/api.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPopup from "../ErrorPopup"; // Import the ErrorPopup component
import "../App.css";

const defaultValue = {
  account_number: "",
  amount: 0,
};

export default function Deposit_Mo() {
  const [Account, setAccount] = useState(defaultValue);
  const [errors, setErrors] = useState({});
  const [errorPopupOpen, setErrorPopupOpen] = useState(false); // New state variable
  const [errorMessage, setErrorMessage] = useState("");
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

    if (String(Account.amount).trim() === "") {
      newErrors.amount = "Amount is required";
    } else if (Number(Account.amount) <= 0) {
      newErrors.amount = "Amount Negative";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const openErrorPopup = () => {
    setErrorPopupOpen(true);
  };

  const Deposit_M = async () => {
    if (!validateFields()) {
      return;
    }
    try {
      const response = await Deposit_Money(Account);
      console.log("response is ",response)
      console.log("response.data  is ",response.data)
      console.log("response.data.errro is ",response.data.error)
      
      if (response && response.data && response.data.error) {
        setErrorPopupOpen(true);
        setErrorMessage(response.data.error);
        console.error("Deposit failed:", response.data.error);
      } else {
        navigate("/");
      }
    } catch (error) {
      setErrorPopupOpen(true);
      setErrorMessage("Deposit failed. Please try again later.");
      console.error("Deposit failed:", error);
    }
    
  };

  const closeErrorPopup = () => {
    setErrorPopupOpen(false);
  };

  return (
    <div>
      <div className="withdrawal-container">
        <div className="submission-container">
          <h4>Deposit Money</h4>
          <div className="form-group" style={{ color: errors.account_number ? "red" : "inherit" }}>
            <label>Account number</label>
            <input onChange={onValueChange} name="account_number" />
            {errors.account_number && <p>{errors.account_number}</p>}
          </div>
          <div className="form-control" style={{ color: errors.amount ? "red" : "inherit" }}>
            <label>Amount</label>
            <input onChange={onValueChange} name="amount" />
            {errors.amount && <p>{errors.amount}</p>}
          </div>
          <div className="form-control">
            <button onClick={Deposit_M}>Deposit</button>
          </div>
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
