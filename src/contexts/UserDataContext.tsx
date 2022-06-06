import { createContext, useContext, useReducer } from "react";
import { userDataContextInterface } from "../interfaces/userContext.interface";
import userDataReducer from "../reducers/userDataReducer";

const UserDataContext = createContext<userDataContextInterface>(
  {} as userDataContextInterface
);

export function UserDataProvider({ children }: { children: React.ReactNode }) {
  const [userData, userDataDispatcher] = useReducer(userDataReducer, {
    playlists: [],
    watchLater: [],
  });
  return (
    <UserDataContext.Provider value={{ userData, userDataDispatcher }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}
