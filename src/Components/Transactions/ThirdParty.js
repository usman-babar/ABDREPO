import React, {useState } from "react";
import PayPal from "./Paypal.js";
import "../App.css";

export default function Payment_Third() {

    const [checkout, setCheckOut] = useState(false);


  return (
    <div
      className="withdrawal-container"
    >
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}
