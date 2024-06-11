import { FC } from "react";
import CategoryList from "./category-list";

interface IAppFooter {
  categories: string[];
  selectedRelevance: string[];
}

const AppFooter: FC<IAppFooter> = ({ categories, selectedRelevance }) => {
  // const showMenu = useSelector((state: RootState) => state.filter.showMenu);

  return (
    <div className="topic-list-footer">
      <CategoryList
        categories={categories}
        selectedRelevance={selectedRelevance}
      />
      {/* <CategoryMenu showMenu={showMenu} /> */}
    </div>
  );
};

export default AppFooter;
