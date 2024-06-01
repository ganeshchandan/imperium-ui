import { useSelector } from "react-redux";
import TopicTile from "./topic-tile";
import { RootState } from "../../store";
import DisaplyGrid from "../../assets/display-grid.svg";

const TopicList = () => {
  const topics = useSelector((state: RootState) => state.topic.topics);

  return (
    <div className="topic-list-view">
      <div className="list-header">
        <div className="category-name-image">
          <label className="category-name">Cyber Security</label>
          <img src={DisaplyGrid} alt="dispaly-type" />
        </div>
      </div>
      <div className="topic-list">
        {topics.map((topic) => (
          <TopicTile topic={topic} key={topic.topic_id} />
        ))}
      </div>
    </div>
  );
};

export default TopicList;
