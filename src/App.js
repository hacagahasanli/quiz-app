import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Context from "./components/auth-context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedUserSavedKeyValue = localStorage.getItem("isLoggedIn");

    if (savedUserSavedKeyValue === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogin = (email, password) => {
    setIsLoggedIn(email.includes("@") && password.trim().length > 0);
    localStorage.setItem("isLoggedIn", "1");
  };

  const onLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Context.Provider value={{
      isLoggedIn:isLoggedIn,
      onLogout:onLogout
    }}>
      <div className="App">
        {!isLoggedIn && <Login onLogin={onLogin} />}
        {isLoggedIn && <Home authenticated={isLoggedIn} onLogout={onLogout} />}
      </div>
    </Context.Provider>
  );
}

export default App;
