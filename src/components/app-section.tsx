import { useSelector } from "react-redux";
import { RootState } from "../store";
import Filter from "./filter";
import TopicList from "./topic/list";
import SelectedTopic from "./topic/selected-topic";
import Loader from "./common/loader";

const AppSection = () => {
  const { selectedTopic, isLoading } = useSelector(
    (state: RootState) => state.topic
  );
  const { isSelected } = selectedTopic;

  return (
    <div
      className={`list-selected-topic-container ${
        isSelected ? "topic-selected" : ""
      }`}
    >
      <TopicList />
      <SelectedTopic />
      <Filter />
      {isLoading && <Loader />}
    </div>
  );
};

export default AppSection;
