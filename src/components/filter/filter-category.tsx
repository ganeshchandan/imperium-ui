import { FC } from "react";
import List from "../common/list";
import { IFilterByCategory } from "@types";

const FilterByCategory: FC<IFilterByCategory> = ({
  listItems,
  isMultipleSelection,
  updatedSelectedItems,
  handleSelected,
  handleRecentlyViewed,
  isRecentlyViewed,
}) => {
  return (
    <div className="category-filter-by">
      <div
        className={`recently-viewed ${
          isRecentlyViewed ? "recently-viewed-selected" : ""
        }`}
        onClick={handleRecentlyViewed}
      >
        Recently Viewed
      </div>
      <List
        listItems={listItems}
        isMultipleSelection={isMultipleSelection}
        selectedItem={updatedSelectedItems}
        onSelect={handleSelected}
      />
    </div>
  );
};

export default FilterByCategory;
