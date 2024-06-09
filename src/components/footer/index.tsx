import { FC, useState } from "react";
import CategoryMenu from "./category-menu";
import CategoryList from "./category-list";

interface IAppFooter {
  categories: string[];
  selectedTopicCategory: string;
}

const AppFooter: FC<IAppFooter> = ({ categories, selectedTopicCategory }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="topic-list-footer">
      <CategoryList
        categories={categories}
        selectedTopicCategory={selectedTopicCategory}
        setShowMenu={setShowMenu}
      />
      <CategoryMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
};

export default AppFooter;
