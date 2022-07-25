import { createContext, ReactNode, useContext, useState } from "react";
import { SearchContext as ISearchContext } from "../interfaces";

const SearchContext = createContext<ISearchContext>({} as ISearchContext);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
