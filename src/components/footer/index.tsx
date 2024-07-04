import { FC } from "react";
import CategoryList from "./menu-bar";
import { useSelector } from "react-redux";
import { RootState } from "@store";
import { SEARCH_FILTER_TYPE } from "@constants";
import SearchMenuBar from "./search-menu-bar";

interface IAppFooter {
  categories: string[];
  selectedRelevance: string[];
}
const AppFooter: FC<IAppFooter> = ({ categories, selectedRelevance }) => {
  const filterType = useSelector((state: RootState) => state.filter.filterType);
  return (
    <div className="topic-list-footer">
      <div className="menu-bar">
        {filterType !== SEARCH_FILTER_TYPE ? (
          <CategoryList
            categories={categories}
            selectedRelevance={selectedRelevance}
          />
        ) : (
          <SearchMenuBar />
        )}
      </div>
    </div>
  );
};

export default AppFooter;
