import { useSelector } from "react-redux";
import { RootState } from "../store";
import SelectedTopic from "./topic/selected-topic";
import Filter from "./filter";
import SwipeComponent from "./Swipe";
import TopicList from "./topic/list";
import useCloseDetailsPage from "./hooks/close-details";
import useSelectTopic from "./hooks/select-topic";

const SwipeableSelectedTopic = SwipeComponent(SelectedTopic);

const AppSection = () => {
  const selectedTopic = useSelector(
    (state: RootState) => state.topic.selectedTopic
  );
  const { isSelected } = selectedTopic;
  const { backToTopicList } = useCloseDetailsPage();
  const { selectPreviousTopic, selectNextTopic } = useSelectTopic();

  return (
    <div
      className={`list-selected-topic-container ${
        isSelected ? "topic-selected" : ""
      }`}
    >
      <TopicList />
      <SwipeableSelectedTopic
        selectedTopic={selectedTopic}
        swipeRight={backToTopicList}
        swipeUp={selectPreviousTopic}
        swipeDown={selectNextTopic}
      />
      <Filter />
    </div>
  );
};

export default AppSection;
