import { ChangeEvent, useRef, KeyboardEvent, SyntheticEvent } from "react";
import { useSelector } from "react-redux";
import { TSearchResults } from "@types";
import { RootState } from "@store";
import { SearchIcon, Close } from "@assets";
import { useFilterTopic } from "@hooks";
import SearchBoxIcons from "../icons";
import { getSearchResults } from "../../../utils/app";
import { SEARCH_FILTER_TYPE } from "@constants";
import ClearButton from "./clear-button";

const SearchInput = ({
  searchValue,
  onCloseSearchBox,
  setSearchValue,
  setSearchResults,
}: {
  searchValue: string;
  onCloseSearchBox: (event: SyntheticEvent<HTMLDivElement, Event>) => void;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<React.SetStateAction<TSearchResults[]>>;
}) => {
  const { filterTopicsBySearch } = useFilterTopic();

  const searchRef = useRef<{ searchBoxTimer?: NodeJS.Timeout }>({});
  const topics = useSelector((state: RootState) => state.topic.topics);

  const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      filterTopicsBySearch(SEARCH_FILTER_TYPE, searchValue, "");
    }
  };

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);
    clearTimeout(searchRef.current.searchBoxTimer);
    searchRef.current.searchBoxTimer = setTimeout(() => {
      if (searchValue.trim() !== "") {
        setSearchResults(() =>
          getSearchResults(topics, searchValue.toLowerCase() || "")
        );
      } else {
        setSearchResults([]);
      }
    }, 300);
  };

  return (
    <div className="search-box">
      <SearchBoxIcons src={SearchIcon} onClick={onCloseSearchBox} />
      <input
        className="search-box-input"
        value={searchValue}
        onChange={handleSearchInput}
        onKeyUp={onKeyUp}
      />
      {searchValue.trim() !== "" ? (
        <ClearButton
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setSearchResults={setSearchResults}
        />
      ) : (
        <SearchBoxIcons src={Close} onClick={onCloseSearchBox} />
      )}
    </div>
  );
};

export default SearchInput;
