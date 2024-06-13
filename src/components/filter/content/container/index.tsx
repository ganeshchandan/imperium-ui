import { FC } from "react";
import CategoryAndFilterByList from "./category-filter-by-list";

export interface IFilterByCategory {
  listItems: string[];
  updatedSelectedItems: string[];
  handleSelected: (selectedItems: string[]) => void;
  isMultipleSelection: boolean;
}

const ContentContainer = (Component: FC<IFilterByCategory>) => {
  return (props: {
    listItems: string[];
    selectedItems: string[];
    handleSelected: (selectedItems: string[]) => void;
    isMultipleSelection: boolean;
  }) => <CategoryAndFilterByList {...props} Component={Component} />;
};

export default ContentContainer;