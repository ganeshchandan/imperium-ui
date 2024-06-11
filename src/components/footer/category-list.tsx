import { FC } from "react";
import { EMPTY_STRING } from "../../constants";
import { useDispatch } from "react-redux";
import { setSelectedRelevance } from "../../reducers/filter";
import Footermenu from "./menu";

interface ICategoryList {
  categories: string[];
  selectedRelevance: string[];
}

const CategoryList: FC<ICategoryList> = ({ categories, selectedRelevance }) => {
  const dispatch = useDispatch();

  const handleSelectedTopicCategory = (
    event: React.SyntheticEvent<HTMLDivElement>
  ) => {
    const { categoryname = EMPTY_STRING } = (event.target as HTMLDivElement)
      .dataset;
    dispatch(
      setSelectedRelevance(
        selectedRelevance.includes(categoryname) ? [] : [categoryname]
      )
    );
  };

  return (
    <div className="categories-pill-list">
      <div className="categories-pill">
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
      <Footermenu />
    </div>
  );
};

export default CategoryList;
