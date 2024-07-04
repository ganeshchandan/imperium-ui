import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CATEGOTY_FILTER_TYPE,
  RECENTLY_VIEWED,
  ALL,
  RECENTLY_VIEWED_LABEL,
} from "@constants";
import { ICategoryList } from "@types";
import { RootState } from "@store";
import { useFilterTopic } from "@hooks";
import { setFilterType, setSelectedRelevance } from "@reducers";
import RelevancePill from "./relevance-pill";

const RelevancePills: FC<ICategoryList> = ({
  categories,
  selectedRelevance,
}) => {
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
    <div className="relevance-pills">
      <RelevancePill
        category={ALL}
        isSelected={selectedRelevance.includes(ALL)}
        onSelect={onSelect}
      />
      <RelevancePill
        key={RECENTLY_VIEWED_LABEL}
        category={RECENTLY_VIEWED_LABEL}
        isSelected={filterType === RECENTLY_VIEWED}
        onSelect={handleRecentlyViewed}
      />
      {categories.map((topicCategory) => (
        <RelevancePill
          key={topicCategory}
          category={topicCategory}
          isSelected={selectedRelevance.includes(topicCategory)}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default RelevancePills;
