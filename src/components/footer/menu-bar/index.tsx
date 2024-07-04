import { FC } from "react";
import { ICategoryList } from "@types";
import Footermenu from "./menu";
import RelevancePills from "./relevance-pills";

const CategoryList: FC<ICategoryList> = ({ categories, selectedRelevance }) => {
  return (
    <>
      <RelevancePills
        categories={categories}
        selectedRelevance={selectedRelevance}
      />
      <Footermenu />
    </>
  );
};

export default CategoryList;
