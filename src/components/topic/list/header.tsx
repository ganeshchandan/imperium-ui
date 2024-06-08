import { FC } from "react";
import DispalyGrid from "../../../assets/display-grid.svg";

interface ITopicListHeader {
  selectedTopicCategory: string;
}

const TopicListheader: FC<ITopicListHeader> = ({ selectedTopicCategory }) => {
  return (
    <div className="list-header">
      <div className="category-name-image">
        <label className="category-name">{selectedTopicCategory}</label>
        <img src={DispalyGrid} alt="dispaly-type" />
      </div>
    </div>
  );
};

export default TopicListheader;
