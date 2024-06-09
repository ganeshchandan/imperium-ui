import { FC, useEffect, useState } from "react";
import FilterRelevanceAction from "../../actions";
import { APPLY, CANCEL, RESET } from "../../../../constants";
import { IFilterByCategory } from ".";
import { setShowFilter } from "../../../../reducers/filter";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  const [updatedSelectedItems, setUpdatedSelectedItems] = useState<string[]>(
    []
  );

  useEffect(() => {
    setUpdatedSelectedItems([...selectedItems]);
  }, [selectedItems]);

  const handleItemSelected = (selectedItems: string[]) => {
    setUpdatedSelectedItems(selectedItems);
  };

  const handleActionButtonClick = (action: string) => {
    if (action === RESET) {
      // handleSelected(selectedItems);
      setUpdatedSelectedItems([...selectedItems]);
    } else if (action === APPLY) {
      handleSelected(updatedSelectedItems);
      dispatch(setShowFilter(false));
    } else if (action === CANCEL) {
      setUpdatedSelectedItems([...selectedItems]);
      dispatch(setShowFilter(false));
    }
  };

  return (
    <>
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
