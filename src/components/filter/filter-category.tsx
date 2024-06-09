import { FC } from "react";
import List from "../common/list";
import { IFilterByCategory } from "./content/container";

const FilterByCategory: FC<IFilterByCategory> = ({
  listItems,
  isMultipleSelection,
  updatedSelectedItems,
  handleSelected,
}) => {
  return (
    <div className="category-filter-by">
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
