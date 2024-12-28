import { useState, SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
import SearchResult from "./results-items";
import { setSearchBox } from "@reducers";
import { TSearchResults } from "@types";
import SearchInput from "./input-box";

const SearchTopic = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<TSearchResults[]>([]);
  const dispatch = useDispatch();

  const onCloseSearchBox = (event: SyntheticEvent<HTMLDivElement, Event>) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(setSearchBox(false));
  };

  const preventDefaultAcion = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  return (
    <div
      className="search-box-overlay"
      onClick={onCloseSearchBox}
      onTouchStart={preventDefaultAcion}
    >
      <div
        className={`search-box-container ${
          searchValue.trim() !== "" ? "show-search-result" : ""
        }`}
        onClick={preventDefaultAcion}
        onTouchStart={preventDefaultAcion}
      >
        <SearchInput
          searchValue={searchValue}
          onCloseSearchBox={onCloseSearchBox}
          setSearchValue={setSearchValue}
          setSearchResults={setSearchResults}
        />
        <div className="separator"></div>
        <SearchResult searchResults={searchResults} searchValue={searchValue} />
      </div>
    </div>
  );
};

export default SearchTopic;
