import { FC } from "react";
import { Menu } from "@assets";
import {
  CATEGOTY_FILTER_TYPE,
  EMPTY_STRING,
  RECENTLY_VIEWED,
} from "@constants";
import { useDispatch, useSelector } from "react-redux";
import {
  setRecentlyViewFilter,
  setSelectedRelevance,
  setShowMenu,
} from "@reducers";
import { useFilterTopic } from "@hooks";
import { RootState } from "@store";
import { ICategoryList } from "@types";

const CategoryList: FC<ICategoryList> = ({ categories, selectedRelevance }) => {
  const dispatch = useDispatch();
  const { filterTopics } = useFilterTopic();
  const { selectedCategory, filterType } = useSelector(
    (state: RootState) => state.filter
  );

  const handleSelectedTopicCategory = (
    event: React.SyntheticEvent<HTMLDivElement>
  ) => {
    const { categoryname = EMPTY_STRING } = (event.target as HTMLDivElement)
      .dataset;
    const updateSelectedRelevance = selectedRelevance.includes(categoryname)
      ? []
      : [categoryname];

    const updatedFilterType =
      filterType === RECENTLY_VIEWED ? CATEGOTY_FILTER_TYPE : filterType;

    dispatch(
      setSelectedRelevance({
        selectedRelavance: updateSelectedRelevance,
        filterType: updatedFilterType,
      })
    );
    filterTopics(updatedFilterType, selectedCategory, updateSelectedRelevance);
  };

  const handleShowMenu = () => {
    dispatch(setShowMenu(true));
  };

  const handleRecentlyViewed = () => {
    dispatch(setRecentlyViewFilter());
    filterTopics(RECENTLY_VIEWED, [], []);
  };

  return (
    <div className="categories-pill-list">
      <div className="categories-pill">
        <div
          className={`category-pill ${
            filterType === RECENTLY_VIEWED ? "category-pill-selected" : ""
          }`}
          onClick={handleRecentlyViewed}
        >
          Recently Viewed
        </div>
        {categories.map((topicCategory) => (
          <div
            key={topicCategory}
            className={`category-pill ${
              selectedRelevance.includes(topicCategory)
                ? "category-pill-selected"
                : EMPTY_STRING
            }`}
            onClick={handleSelectedTopicCategory}
            data-categoryname={topicCategory}
          >
            {topicCategory}
          </div>
        ))}
      </div>
      <div className="footer-menu" onClick={handleShowMenu}>
        <div className="footer-menu-icon">
          <img src={Menu} alt="menu" />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
