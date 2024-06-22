import { SEARCH_FILTER_TYPE } from "../../../constants";
import { useFilterTopic } from "../../../hooks";
import { TSearchByColumn, TSearchResults } from "../../../type";

const SearchResult = ({
  searchResults,
}: {
  searchResults: TSearchResults[];
}) => {
  const { filterTopicsBySearch } = useFilterTopic();

  const handleOnClick = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const { searchvalue = "", searchby } = (event.target as HTMLInputElement)
      .dataset;
    filterTopicsBySearch(
      SEARCH_FILTER_TYPE,
      searchvalue,
      searchby as TSearchByColumn
    );
  };

  return (
    <div className="search-results">
      {searchResults.map(({ type, value }) => (
        <div
          className="search-result"
          key={value}
          onClick={handleOnClick}
          data-searchvalue={value}
          data-searchBy={type}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
