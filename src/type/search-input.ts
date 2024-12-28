import { TSearchResults } from "@types";
import { SyntheticEvent } from "react";

export interface ISearchInput {
  searchValue: string;
  onCloseSearchBox: (event: SyntheticEvent<HTMLDivElement, Event>) => void;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<React.SetStateAction<TSearchResults[]>>;
}

export interface ISearchClearButton {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<React.SetStateAction<TSearchResults[]>>;
}

export interface ISearchBoxIcons {
  src: string;
  onClick?: (event: SyntheticEvent<HTMLDivElement>) => void;
}
