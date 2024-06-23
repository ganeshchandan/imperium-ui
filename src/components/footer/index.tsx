import { FC } from "react";
import CategoryMenu from "./category-menu";
import CategoryList from "./category-list";
import { useSelector } from "react-redux";
import { RootState } from "@store";

interface IAppFooter {
  categories: string[];
  selectedRelevance: string[];
}

const AppFooter: FC<IAppFooter> = ({ categories, selectedRelevance }) => {
  const showMenu = useSelector((state: RootState) => state.filter.showMenu);

  return (
    <div className="topic-list-footer">
      <CategoryList
        categories={categories}
        selectedRelevance={selectedRelevance}
      />
      <CategoryMenu showMenu={showMenu} />
    </div>
  );
};

export default AppFooter;
