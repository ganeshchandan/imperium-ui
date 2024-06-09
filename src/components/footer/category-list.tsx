import { FC } from "react";
import Menu from "../../assets/menu.svg";
import { EMPTY_STRING } from "../../constants";
import { useDispatch } from "react-redux";
import { setSelectedTopicCategory } from "../../reducers/topicSlice";

interface ICategoryList {
  categories: string[];
  selectedTopicCategory: string;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryList: FC<ICategoryList> = ({
  categories,
  selectedTopicCategory,
  setShowMenu,
}) => {
  const dispatch = useDispatch();

  const handleSelectedTopicCategory = (
    event: React.SyntheticEvent<HTMLDivElement>
  ) => {
    const { categoryname = EMPTY_STRING } = (event.target as HTMLDivElement)
      .dataset;
    dispatch(setSelectedTopicCategory(categoryname));
  };

  const handleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <div className="categories-pill-list">
      <div className="categories-pill">
        {categories.map((topicCategory) => (
          <div
            key={topicCategory}
            className={`category-pill ${
              selectedTopicCategory === topicCategory
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
        <img src={Menu} alt="menu" />
      </div>
    </div>
  );
};

export default CategoryList;
