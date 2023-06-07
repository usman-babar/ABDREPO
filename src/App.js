import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";

//Components
import BMS from "./Components/Transactions/Main_Page.js";
import Withdrawal from "./Components/Transactions/Withdraw.js"
import Deposit from "./Components/Transactions/Deposit.js"
import View from "./Components/Transactions/View_Trans.js"
import AddAccount from "./Components/Account/AddAccount.js"
import ThridApi from "./Components/Transactions/ThirdParty.js"

import Navbar from "./Components/Transactions/Navbar.js";

import LoginPage from "./Components/Customer/Login.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logic to handle successful login
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<BMS />} />
              <Route path="/withdraw" element={<Withdrawal />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/all" element={<View />} />
              <Route path="/add" element={<AddAccount />} />
              <Route path="/thirdapi" element ={<ThridApi />} />
              
            </Routes>
          </>
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
