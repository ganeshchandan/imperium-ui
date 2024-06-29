import { FC } from "react";
import CategoryList from "./category-list";

interface IAppFooter {
  categories: string[];
  selectedRelevance: string[];
}
const AppFooter: FC<IAppFooter> = ({ categories, selectedRelevance }) => {
  return (
    <div className="topic-list-footer">
      <CategoryList
        categories={categories}
        selectedRelevance={selectedRelevance}
      />
    </div>
  );
};

export default AppFooter;
