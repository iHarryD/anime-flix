import { createContext, useContext, useEffect, useReducer } from "react";
import {
  userDataActionTypes,
  userDataContextInterface,
} from "../interfaces/userContext.interface";
import userDataReducer from "../reducers/userDataReducer";
import { getPlaylists, getWatchLater } from "../services";
import { useAuth } from "./AuthContext";

const UserDataContext = createContext<userDataContextInterface>(
  {} as userDataContextInterface
);

export function UserDataProvider({ children }: { children: React.ReactNode }) {
  const [userData, userDataDispatcher] = useReducer(userDataReducer, {
    playlists: [],
    watchLater: [],
    history: [],
  });
  const { userCredentials } = useAuth();

  useEffect(() => {
    if (userCredentials === null) return;
    getPlaylists(undefined, (result) =>
      userDataDispatcher({
        type: userDataActionTypes.POPULATE_PLAYLIST,
        payload: { updatedPlaylist: result.data },
      })
    );
    getWatchLater(undefined, (result) =>
      userDataDispatcher({
        type: userDataActionTypes.POPULATE_WATCHLATER,
        payload: { updatedWatchLater: result.data },
      })
    );
  }, [userCredentials]);

  return (
    <UserDataContext.Provider value={{ userData, userDataDispatcher }}>
      {children}
    </UserDataContext.Provider>
  );
}

export function useUserData() {
  return useContext(UserDataContext);
}
