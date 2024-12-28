import { FC } from "react";
import SearchResultItem from "./result-item";
import { ISearchResults } from "@types";

const SearchResults: FC<ISearchResults> = ({ searchResults, searchValue }) => {
  return (
    <div className="search-results">
      {searchResults.map((searchResult, index) => (
        <SearchResultItem
          key={index}
          searchResult={searchResult}
          searchValue={searchValue}
        />
      ))}
    </div>
  );
};

export default SearchResults;
