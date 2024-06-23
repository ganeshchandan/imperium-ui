import { FC, useEffect, useState } from "react";
import FilterRelevanceAction from "../../actions";
import { APPLY, CANCEL, RESET } from "@constants";
import { setShowFilter } from "@reducers";
import { useDispatch } from "react-redux";
import { ICategoryAndFilterByList } from "@types";

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
