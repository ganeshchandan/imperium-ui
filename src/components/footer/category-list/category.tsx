import { ICategoryPill } from "@types";
import { FC } from "react";

const CategoryPill: FC<ICategoryPill> = ({
  category,
  isSelected,
  onSelect,
}) => {
  const handleCategoryPillSelect = (event: any) => {
    event.stopPropagation();
    event.target.scrollIntoViewIfNeeded({ behavior: "smooth" });
    onSelect([category]);
  };
  return (
    <div
      className={`category-pill ${isSelected ? "category-pill-selected" : ""}`}
      onClick={handleCategoryPillSelect}
    >
      {category}
    </div>
  );
};

export default CategoryPill;
