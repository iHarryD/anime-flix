import { Dispatch, SetStateAction } from "react";

export interface SearchContext {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}
