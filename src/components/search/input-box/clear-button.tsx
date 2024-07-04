import { TSearchResults } from "@types";

const ClearButton = ({
  searchValue,
  setSearchValue,
  setSearchResults,
}: {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<React.SetStateAction<TSearchResults[]>>;
}) => {
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
