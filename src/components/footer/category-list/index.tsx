import { FC } from "react";
import {
  CATEGOTY_FILTER_TYPE,
  RECENTLY_VIEWED,
  ALL,
  RECENTLY_VIEWED_LABEL,
} from "@constants";
import { useDispatch, useSelector } from "react-redux";
import { setFilterType, setSelectedRelevance } from "@reducers";
import { useFilterTopic } from "@hooks";
import { RootState } from "@store";
import { ICategoryList } from "@types";
import Footermenu from "../menu";
import CategoryPill from "./category";

const CategoryList: FC<ICategoryList> = ({ categories, selectedRelevance }) => {
  const dispatch = useDispatch();
  const { filterTopics } = useFilterTopic();
  const { selectedCategory, filterType } = useSelector(
    (state: RootState) => state.filter
  );

  const handleRecentlyViewed = () => {
    dispatch(setFilterType({ filterType: RECENTLY_VIEWED }));
    filterTopics(RECENTLY_VIEWED, [], []);
  };

  const onSelect = (selectedRelevance: string[]) => {
    const updatedFilterType =
      filterType === RECENTLY_VIEWED ? CATEGOTY_FILTER_TYPE : filterType;

    dispatch(
      setSelectedRelevance({
        selectedRelavance: selectedRelevance,
        filterType: updatedFilterType,
      })
    );
    filterTopics(updatedFilterType, selectedCategory, selectedRelevance);
  };

  return (
    <div className="categories-pill-list">
      <div className="categories-pill">
        <CategoryPill
          category={ALL}
          isSelected={selectedRelevance.includes(ALL)}
          onSelect={onSelect}
        />
        <CategoryPill
          key={RECENTLY_VIEWED_LABEL}
          category={RECENTLY_VIEWED_LABEL}
          isSelected={filterType === RECENTLY_VIEWED}
          onSelect={handleRecentlyViewed}
        />
        {categories.map((topicCategory) => (
          <CategoryPill
            key={topicCategory}
            category={topicCategory}
            isSelected={selectedRelevance.includes(topicCategory)}
            onSelect={onSelect}
          />
        ))}
      </div>
      <Footermenu />
    </div>
  );
};

export default CategoryList;
