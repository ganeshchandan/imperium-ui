import { FormEvent, useState } from "react";
import { useFilterTopic } from "../../../hooks";
import { SEARCH_FILTER_TYPE } from "../../../constants";

const SearchTopic = () => {
  const [searchValue, setSearchValue] = useState("");
  const { filterTopicsBySearch } = useFilterTopic();

  const handleSearchInput = (event: FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };
  const onSearchTopic = () => {
    filterTopicsBySearch(SEARCH_FILTER_TYPE, searchValue);
  };
  return (
    <div className="search-box-container">
      <div className="search-box">
        <input
          className="search-box-input"
          value={searchValue}
          onChange={handleSearchInput}
        />
        <button className="search-box-button" onClick={onSearchTopic}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchTopic;
