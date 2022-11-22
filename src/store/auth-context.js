import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (username, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const currentContext = {
    isLoggedIn: isLoggedIn,
    onLogin: (username, password) => loginHandler(username, password),
    onLogout: () => logoutHandler(),
  };

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("token");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    try {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = (username, password) => {
    console.log(username, password);

    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const { token } = res;
        if (token) {
          localStorage.setItem("token", res.token);
          console.log(token)
          setIsLoggedIn(true);
          // navigate("/home");
        }
        const { message } = res;
        if (message){
          console.log(message)
        }
      });

    // navigate("/login");
    // setShowOverlay(false);

    // localStorage.setItem("isLoggedIn", "1");
    // setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={currentContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
