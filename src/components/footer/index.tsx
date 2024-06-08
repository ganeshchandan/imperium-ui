import { FC, useState } from "react";
import CategoryMenu from "./category-menu";
import CategoryList from "./category-list";

interface IAppFooter {
  categoryies: string[];
  selectedTopicCategory: string;
}

const AppFooter: FC<IAppFooter> = ({ categoryies, selectedTopicCategory }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="topic-list-footer">
      <CategoryList
        categoryies={categoryies}
        selectedTopicCategory={selectedTopicCategory}
        setShowMenu={setShowMenu}
      />
      <CategoryMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
};

export default AppFooter;
