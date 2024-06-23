import { FC } from "react";
import SearchResultItem from "./result-item";
import { ISearchResults } from "../../../type";

const SearchResults: FC<ISearchResults> = ({ searchResults, searchValue }) => {
  return (
    <div className="search-results">
      {searchResults.map((searchResult) => (
        <SearchResultItem
          searchResult={searchResult}
          searchValue={searchValue}
        />
      ))}
    </div>
  );
};

export default SearchResults;
