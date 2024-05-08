import { NEWS_DATA } from "../../constants";
import TopicTile from "./topic-tile";

const TopicList = () => {
  return (
    <div className="topic-list">
      {NEWS_DATA.map((topic) => (
        <TopicTile topic={topic} />
      ))}
    </div>
  );
};

export default TopicList;
