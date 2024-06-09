import { FC } from "react";
import DispalyGrid from "../../../assets/display-grid.svg";

interface ITopicListHeader {
  selectedCategory: string[];
}

const TopicListheader: FC<ITopicListHeader> = ({ selectedCategory }) => {
  return (
    <div className="list-header">
      <div className="category-name-image">
        <label className="category-name">{selectedCategory[0] || ""}</label>
        <img src={DispalyGrid} alt="dispaly-type" />
      </div>
    </div>
  );
};

export default TopicListheader;
