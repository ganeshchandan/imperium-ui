import { FC } from "react";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";
import SwipeComponent from "../../Swipe";
import SelectedTopicContent from "./content";
import { useCloseDetailsPage, useSelectTopic } from "../../../hooks";

const SwipeableSelectedTopic = SwipeComponent(SelectedTopicContent);

const SelectedTopic: FC = () => {
  const selectedTopic = useSelector(
    (state: RootState) => state.topic.selectedTopic
  );
  // const { topicIndex, swipeType } = selectedTopic;
  const { backToTopicList } = useCloseDetailsPage();
  const { selectPreviousTopic, selectNextTopic } = useSelectTopic();

  return (
    <div className="selected-topic-list">
      <SwipeableSelectedTopic
        selectedTopic={selectedTopic}
        swipeRight={backToTopicList}
        swipeUp={selectPreviousTopic}
        swipeDown={selectNextTopic}
      />
    </div>
  );
};

export default SelectedTopic;
