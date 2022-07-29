import axios from "axios";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type UserCredentials = {
  _id: string;
  email: string;
  firstName: string;
  token: string;
} | null;

interface IAuthContext {
  logout: () => void;
  setUserCredentials: Dispatch<SetStateAction<UserCredentials>>;
  setToRemember: Dispatch<SetStateAction<boolean>>;
  userCredentials: UserCredentials;
}

function initiateUserCredentials(): UserCredentials | null {
  const _id = localStorage.getItem("_id");
  const email = localStorage.getItem("email");
  const firstName = localStorage.getItem("firstName");
  const token = localStorage.getItem("token");
  if (_id && email && firstName && token) {
    return { _id, email, firstName, token };
  } else {
    return null;
  }
}

const defaultValues = initiateUserCredentials();

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userCredentials, setUserCredentials] =
    useState<UserCredentials>(defaultValues);
  const [toRemember, setToRemember] = useState(false);

  useEffect(() => {
    const toSaveIn = toRemember ? localStorage : sessionStorage;

    if (userCredentials) {
      toSaveIn.setItem("email", userCredentials.email);
      toSaveIn.setItem("firstName", userCredentials.firstName);
      toSaveIn.setItem("_id", userCredentials._id);
      toSaveIn.setItem("token", userCredentials.token);
      axios.defaults.headers.common["authorization"] = userCredentials.token;
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("firstName");
      localStorage.removeItem("token");
      localStorage.removeItem("_id");
      sessionStorage.removeItem("email");
      sessionStorage.removeItem("firstName");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("_id");
      axios.defaults.headers.common["authorization"] = false;
    }
  }, [userCredentials]);

  function logout(callback?: () => void) {
    setUserCredentials(null);
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
