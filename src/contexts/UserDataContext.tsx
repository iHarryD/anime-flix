export {};

// import React, { createContext, Reducer, useContext, useReducer } from "react";
// import {
//   userDataActions,
//   userDataContextInterface,
//   userDataInterface,
// } from "../interfaces/userContext.interface";
// import userDataReducer from "../reducers/userDataReducer";

// const UserDataContext = createContext<userDataContextInterface | null>(null);

// export function UserDataProvider({ children }: { children: React.ReactNode }) {
//   const [userData, userDataDispatcher] = useReducer<
//     Reducer<userDataInterface, userDataActions>
//   >(userDataReducer, { playlists: [], watchLater: [] });
//   return (
//     <UserDataContext.Provider value={{ userData, userDataDispatcher }}>
//       {children}
//     </UserDataContext.Provider>
//   );
// }

// export function useUserData() {
//   return useContext(UserDataContext);
// }
