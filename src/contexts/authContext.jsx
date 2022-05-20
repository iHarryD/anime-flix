import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const defaultValues = {
  firstName: localStorage.getItem("firstName") || null,
  token: localStorage.getItem("token") || null,
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(defaultValues);

  useEffect(() => {
    if (userData.token !== null || userData.firstName !== null) {
      localStorage.setItem("firstName", userData.firstName);
      localStorage.setItem("token", userData.token);
      axios.defaults.headers.common["authorization"] = userData.token;
    } else {
      localStorage.removeItem("firstName");
      localStorage.removeItem("token");
      axios.defaults.headers.common["authorization"] = false;
    }
  }, [userData]);

  function logout(callback = null) {
    userData(defaultValues);
    if (callback) callback();
  }

  return (
    <AuthContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
