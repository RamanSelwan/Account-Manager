import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import AccountPage from "./components/AccountPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userInfo) => {
    setUser(userInfo);
    alert("Login successful");
  };

  const handleRegister = (userInfo) => {
    setUser(userInfo);
    alert("Registration successful");
  };

  const handleUpdateAccount = (updatedInfo) => {
    setUser(updatedInfo);
    alert("Account updated successfully");
  };

  const handleLogout = () => setUser(null);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Account Manager
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/account">
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <Routes>
        <Route
          path="/login"
          element={
            !user ? (
              <LoginPage onLogin={handleLogin} />
            ) : (
              <AccountPage user={user} onUpdate={handleUpdateAccount} />
            )
          }
        />
        <Route
          path="/register"
          element={
            !user ? (
              <RegistrationPage onRegister={handleRegister} />
            ) : (
              <AccountPage user={user} onUpdate={handleUpdateAccount} />
            )
          }
        />
        <Route
          path="/account"
          element={
            user ? (
              <AccountPage user={user} onUpdate={handleUpdateAccount} />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/"
          element={
            !user ? (
              <LoginPage onLogin={handleLogin} />
            ) : (
              <AccountPage user={user} onUpdate={handleUpdateAccount} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
