import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const defaultValues = {
  firstName: localStorage.getItem("firstName") || null,
  token: localStorage.getItem("token") || null,
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(defaultValues);
  const [toRemember, setToRemember] = useState(false);

  useEffect(() => {
    const toSaveIn = toRemember ? localStorage : sessionStorage;
    if (userData.token !== null || userData.firstName !== null) {
      toSaveIn.setItem("firstName", userData.firstName);
      toSaveIn.setItem("token", userData.token);
      axios.defaults.headers.common["authorization"] = userData.token;
    } else {
      localStorage.removeItem("firstName");
      localStorage.removeItem("token");
      sessionStorage.removeItem("firstName");
      sessionStorage.removeItem("token");
      axios.defaults.headers.common["authorization"] = false;
    }
  }, [userData]);

  function logout(callback = null) {
    setUserData({ firstName: null, token: null });
    if (callback) callback();
  }

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, setToRemember, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}