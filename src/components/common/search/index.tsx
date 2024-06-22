import {
  ChangeEvent,
  useRef,
  useState,
  KeyboardEvent,
  SyntheticEvent,
} from "react";
// import { useFilterTopic } from "../../../hooks";
// import { SEARCH_FILTER_TYPE } from "../../../constants";
import CloseImg from "../../../assets/close.svg";
import SearchImg from "../../../assets/search-normal.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchBox } from "../../../reducers/topic";
// import { useFilterTopic } from "../../../hooks";
import { getSearchResults } from "../../../utils/search";
import { RootState } from "../../../store";
import SearchResult from "./result";
import SearchBoxIcons from "./icons";
import { TSearchResults } from "../../../type";
import { useFilterTopic } from "../../../hooks";
import { SEARCH_FILTER_TYPE } from "../../../constants";

const SearchTopic = () => {
  const searchRef = useRef<{ searchBoxTimer?: NodeJS.Timeout }>({});
  const topics = useSelector((state: RootState) => state.topic.topics);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<TSearchResults[]>([]);
  const dispatch = useDispatch();
  const { filterTopicsBySearch } = useFilterTopic();

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchValue(searchValue);
    clearTimeout(searchRef.current.searchBoxTimer);
    searchRef.current.searchBoxTimer = setTimeout(() => {
      if (searchValue.trim() !== "") {
        setSearchResults(() =>
          getSearchResults(topics, searchValue.toLowerCase() || "")
        );
      }
    }, 300);
  };

  const onKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      filterTopicsBySearch(SEARCH_FILTER_TYPE, searchValue, "");
    }
  };

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
      onTouchEnd={onCloseSearchBox}
      onTouchStart={onCloseSearchBox}
    >
      <div
        className={`search-box-container ${
          searchValue.trim() !== "" ? "show-search-result" : ""
        }`}
        onClick={preventDefaultAcion}
        onTouchEnd={preventDefaultAcion}
        onTouchStart={preventDefaultAcion}
      >
        <div className="search-box">
          <SearchBoxIcons src={SearchImg} onClick={onCloseSearchBox} />
          <input
            className="search-box-input"
            value={searchValue}
            onChange={handleSearchInput}
            onKeyUp={onKeyUp}
          />
          <SearchBoxIcons src={CloseImg} onClick={onCloseSearchBox} />
        </div>
        <SearchResult searchResults={searchResults} />
      </div>
    </div>
  );
};

export default SearchTopic;
