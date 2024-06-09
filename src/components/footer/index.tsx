import { FC, useState } from "react";
import CategoryMenu from "./category-menu";
import CategoryList from "./category-list";

interface IAppFooter {
  categories: string[];
  selectedCategory: string[];
}

const AppFooter: FC<IAppFooter> = ({ categories, selectedCategory }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="topic-list-footer">
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        setShowMenu={setShowMenu}
      />
      <CategoryMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
};

export default AppFooter;
