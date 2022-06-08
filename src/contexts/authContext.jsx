import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const defaultValues = {
  firstName: localStorage.getItem("firstName") || null,
  _id: localStorage.getItem("_id") || null,
  token: localStorage.getItem("token") || null,
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userCredentials, setUserCredentials] = useState(defaultValues);
  const [toRemember, setToRemember] = useState(false);

  useEffect(() => {
    const toSaveIn = toRemember ? localStorage : sessionStorage;

    if (userCredentials.token !== null || userCredentials.firstName !== null) {
      toSaveIn.setItem("firstName", userCredentials.firstName);
      toSaveIn.setItem("_id", userCredentials._id);
      toSaveIn.setItem("token", userCredentials.token);
      axios.defaults.headers.common["authorization"] = userCredentials.token;
    } else {
      localStorage.removeItem("firstName");
      localStorage.removeItem("token");
      localStorage.removeItem("_id");
      sessionStorage.removeItem("firstName");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("_id");
      axios.defaults.headers.common["authorization"] = false;
    }
  }, [userCredentials]);

  function logout(callback = null) {
    setUserCredentials({ firstName: null, token: null });
    if (callback) callback();
  }

  return (
    <AuthContext.Provider
      value={{ userCredentials, setUserCredentials, setToRemember, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
