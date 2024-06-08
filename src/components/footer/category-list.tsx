import { FC } from "react";
import Menu from "../../assets/menu.svg";
import { EMPTY_STRING } from "../../constants";
import { useDispatch } from "react-redux";
import { setSelectedTopicCategory } from "../../reducers/topicSlice";

interface ICategoryList {
  categoryies: string[];
  selectedTopicCategory: string;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryList: FC<ICategoryList> = ({
  categoryies,
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
        {categoryies.map((topicCategory) => (
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
