import { ISearchClearButton } from "@types";

const ClearButton = ({
  searchValue,
  setSearchValue,
  setSearchResults,
}: ISearchClearButton) => {
  const resetSearchResult = (event: any) => {
    event.stopPropagation();
    setSearchValue("");
    setSearchResults([]);
  };

  return (
    <div
      className={`search-clear ${
        searchValue.trim() === "" ? "disable-clear" : ""
      }`}
      onClick={resetSearchResult}
    >
      Clear
    </div>
  );
};

export default ClearButton;
