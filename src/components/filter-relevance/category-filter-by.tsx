import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import List from "../common/list";
import { setFilterBy, setSelectedCategory } from "../../reducers/topicSlice";
import { CATEGORY_TAB } from "../../constants";
import { FC } from "react";

interface ICategoryFilterBy {
  selectedTab: string;
}

const CategoryFilterBy: FC<ICategoryFilterBy> = ({ selectedTab }) => {
  const dispatch = useDispatch();

  const { filterByList, selectedFilterBy, categoryies, selectedCategory } =
    useSelector((state: RootState) => state.topic);

  const handleFilterBySelected = (selectedItem: string[]) => {
    if (selectedTab === CATEGORY_TAB) {
      dispatch(setSelectedCategory(selectedItem));
    } else {
      dispatch(setFilterBy(selectedItem));
    }
  };

  return (
    <div className="category-filter-by">
      <List
        listItems={selectedTab === CATEGORY_TAB ? categoryies : filterByList}
        isMultipleSelection={true}
        selectedItem={
          selectedTab === CATEGORY_TAB ? selectedCategory : selectedFilterBy
        }
        onSelect={handleFilterBySelected}
      />
    </div>
  );
};

export default CategoryFilterBy;
