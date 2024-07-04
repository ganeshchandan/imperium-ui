import { ICategoryPill } from "@types";
import { FC } from "react";

const RelevancePill: FC<ICategoryPill> = ({
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
      className={`relevance-pill ${
        isSelected ? "relevance-pill-selected" : ""
      }`}
      onClick={handleCategoryPillSelect}
    >
      {category}
    </div>
  );
};

export default RelevancePill;
