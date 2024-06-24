import { FC } from "react";
import CategoryAndFilterByList from "./category-filter-by-list";
import { IFilterByCategory } from "@types";

const ContentContainer = (Component: FC<IFilterByCategory>) => {
  return (props: {
    listItems: string[];
    selectedItems: string[];
    handleSelected: (selectedItems: string[]) => void;
    isMultipleSelection: boolean;
  }) => <CategoryAndFilterByList {...props} Component={Component} />;
};

export default ContentContainer;
