import { FC, useEffect, useState } from "react";
import FilterRelevanceAction from "../../actions";
import { APPLY, CANCEL, RESET } from "../../../../constants";
import { IFilterByCategory } from ".";
import { setShowFilter } from "../../../../reducers/filter";
import { useDispatch } from "react-redux";

interface ICategoryAndFilterByList {
  listItems: string[];
  selectedItems: string[];
  handleSelected: (selectedItems: string[], isRecentlyViewed: boolean) => void;
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
  const [isRecentlyViewed, setRecentlyViewed] = useState<boolean>(false);

  useEffect(() => {
    setUpdatedSelectedItems([...selectedItems]);
  }, [selectedItems]);

  const handleItemSelected = (selectedItems: string[]) => {
    setRecentlyViewed(false);
    setUpdatedSelectedItems(selectedItems);
  };

  const handleRecentlyViewed = () => {
    setUpdatedSelectedItems([]);
    setRecentlyViewed(true);
  };

  const handleActionButtonClick = (action: string) => {
    if (action === RESET) {
      setUpdatedSelectedItems([...selectedItems]);
    } else if (action === APPLY) {
      handleSelected(updatedSelectedItems, isRecentlyViewed);
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
        handleRecentlyViewed={handleRecentlyViewed}
        isRecentlyViewed={isRecentlyViewed}
      />
      <FilterRelevanceAction
        handleActionButtonClick={handleActionButtonClick}
      />
    </>
  );
};

export default CategoryAndFilterByList;
