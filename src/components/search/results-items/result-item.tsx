import { FC } from "react";
import Highlighter from "react-highlight-words";
import { SEARCH_FILTER_TYPE } from "@constants";
import { useFilterTopic } from "../../../hooks";
import { ISearchResultItem } from "@types";

const SearchResultItem: FC<ISearchResultItem> = ({
  searchResult,
  searchValue,
}) => {
  const { searchBy, searchvalue } = searchResult;
  const { filterTopicsBySearch } = useFilterTopic();

  const handleOnClick = () => {
    filterTopicsBySearch(SEARCH_FILTER_TYPE, searchvalue, searchBy);
  };

  return (
    <div className="search-result" key={searchvalue} onClick={handleOnClick}>
      <Highlighter
        highlightClassName="highlight-searched-value"
        searchWords={[searchValue]}
        autoEscape={true}
        textToHighlight={searchvalue}
        onClick={handleOnClick}
      />
    </div>
  );
};

export default SearchResultItem;
