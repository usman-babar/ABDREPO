import { useState } from "react";
import ErrorPopup from "../Popup";
import backgroundImage from "../../Cover.jpeg";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorPopupOpen, setErrorPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };

    fetch("http://localhost:3001/customer/signin", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === "object") {
          if (data.Message === "User does not exist") {
            setErrorPopupOpen(true);
          } else {
            if (data.user.password === password) {
              onLogin();
            } else {
              setErrorPopupOpen(true);
            }
          }
        } else {
          console.error("Invalid response data:", data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const closeErrorPopup = () => {
    setErrorPopupOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <h1 style={{ color: "white" }}>Customer Login</h1>
        <br />
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid gray",
              fontSize: "16px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid gray",
              fontSize: "16px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              fontSize: "20px",
            }}
          >
            Login
          </button>
        </form>
      </div>

      <ErrorPopup isOpen={errorPopupOpen} onClose={closeErrorPopup}>
        Invalid username or password. Please try again.
      </ErrorPopup>
    </div>
  );
}

export default LoginPage;
