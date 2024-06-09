import { useSelector } from "react-redux";
import { RootState } from "../store";
import TopicList from "./topic/list";
import SelectedTopic from "./topic/selected-topic";
import Filter from "./filter";

const AppSection = () => {
  const selectedTopic = useSelector(
    (state: RootState) => state.topic.selectedTopic
  );
  const { isSelected } = selectedTopic;

  return (
    <div
      className={`list-selected-topic-container ${
        isSelected ? "topic-selected" : ""
      }`}
    >
      <TopicList />
      <SelectedTopic selectedTopic={selectedTopic} />
      <Filter />
    </div>
  );
};

export default AppSection;
