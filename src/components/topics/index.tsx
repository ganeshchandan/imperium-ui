import { RootState } from "@store";
import { useSelector } from "react-redux";
import TopicList from "./list";
import SelectedTopic from "./selected-topic";
import TopicLink from "./link";

const Topics = () => {
  const { selectedTopic } = useSelector((state: RootState) => state.topic);
  const { selectedPage } = selectedTopic;

  return (
    <div className={`topics-container ${selectedPage}`}>
      <TopicList />
      <SelectedTopic />
      <TopicLink />
    </div>
  );
};

export default Topics;
