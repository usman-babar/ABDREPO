import axios from "axios";

// const app = require("./app");
// 5678
// app.listen(5678, () => {
//   console.log("Example app listening on port 5678!");
// });

const URL = "http://localhost:3001";

//Withdraw Amount
export const Withdraw_Money = async (data) => {
  try {
    console.log("DATD DFROM FRONTEND IS ",data);
    return await axios.post(`${URL}/transaction/withdraw`, data);
  } catch (error) {
    console.log(`Erroe while calling withdraw money api `, error);
  }
};

//Display all transactoons
export const gettransactions = async (data) => {
    try {
        console.log("innnn ",data)
       
      return await axios.post(`${URL}/transaction/all`, data);
    } catch (error) {
      console.log(`Error while calling get view trasnactions api `, error);
    }
  };

// deposit Amount
export const Deposit_Money = async (data) => {
  try {
    console.log("value aaaiii ", data.amount);

    const parsedData = {
      ...data,
      amount: parseInt(data.amount, 10), // Parse amount to integer
    };

    console.log(parsedData);

    if (parsedData.amount > 0) {
      return await axios.post(`${URL}/transaction/deposit`, parsedData);
    } else {
      throw new Error("Invalid amount");
    }
  } catch (error) {
    console.log(`Error while calling deposit money API: `, error);
    throw error;
  }
};

  //Create account Amount
  export const Create_Account = async (data) => {
    try {
      console.log(data);
      return await axios.post(`${URL}/account/add`, data);
    } catch (error) {
      console.log(`Erroe while calling Create Account api `, error);
    }
  };
  