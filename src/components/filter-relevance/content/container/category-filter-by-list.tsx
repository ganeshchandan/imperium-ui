import { FC, useEffect, useState } from "react";
import FilterRelevanceAction from "../../actions";
import { APPLY, RESET } from "../../../../constants";
import { IFilterByCategory } from ".";

interface ICategoryAndFilterByList {
  listItems: string[];
  selectedItems: string[];
  handleSelected: (selectedItems: string[]) => void;
  isMultipleSelection: boolean;
  Component: FC<IFilterByCategory>;
}

const CategoryAndFilterByList: FC<ICategoryAndFilterByList> = ({
  listItems,
  selectedItems,
  handleSelected,
  isMultipleSelection,
  Component,
}) => {
  const [updatedSelectedItems, setUpdatedSelectedItems] = useState<string[]>(
    []
  );

  useEffect(() => {
    setUpdatedSelectedItems(selectedItems);
  }, []);

  const handleItemSelected = (selectedItems: string[]) => {
    setUpdatedSelectedItems(selectedItems);
  };

  const handleActionButtonClick = (action: string) => {
    if (action === RESET) {
      handleSelected(selectedItems);
      setUpdatedSelectedItems(selectedItems);
    } else if (action === APPLY) {
      handleSelected(updatedSelectedItems);
    }
  };

  return (
    <>
      {/* <div className="category-filter-by">
        <List
          listItems={listItems}
          isMultipleSelection={isMultipleSelection}
          selectedItem={updatedSelectedItems}
          onSelect={handleItemSelected}
        />
      </div> */}
      <Component
        listItems={listItems}
        isMultipleSelection={isMultipleSelection}
        updatedSelectedItems={updatedSelectedItems}
        handleSelected={handleItemSelected}
      />
      <FilterRelevanceAction
        handleActionButtonClick={handleActionButtonClick}
      />
    </>
  );
};

export default CategoryAndFilterByList;
