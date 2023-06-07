import React from "react";
import "../App.css";

export default function BMS() {
  return (
    <div className="bank-background"> {}
      <div style={{ width: '70%', textAlign: 'center' }}>
        <h1 style={{ color: 'yellow', fontSize: '36px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Bank Management System
        </h1>
        
        <p style={{ color: 'yellow', fontSize: '22px', marginTop: '30px' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          <b>
          Hello from the Bank Management System. This is the MERN Application, and its purpose is to manage bank customers and managers.
          </b>
            
        </p>
        <br></br>
        <p style={{ color: 'yellow', fontSize: '20px', marginTop: '50px' , textShadow: '2px 2px 4px rgba(0, 0, 0, 1.6)' }}>
          The application is developed by:
        </p>
        <p style={{ color: 'yellow', fontSize: '23px', marginTop: '10px', fontWeight: 'bold' , textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Usman Babar | Muhammad Abdullah | Moiz Afzal
        </p>
      </div>
    </div>
  );
}
