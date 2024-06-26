import { useDispatch, useSelector } from "react-redux";
import { setSelectedTopic } from "@reducers";
import { RootState } from "@store";
import { getTopicIndex, ITopicSelectionType } from "../utils/swipe";
import {
  BACK_PAGE_MAPPER,
  DETAILS_PAGE_SELECT,
  LINK_PAGE_SELECT,
} from "@constants";

export const useSelectTopic = () => {
  const dispatch = useDispatch();
  const filteredTopics = useSelector(
    (state: RootState) => state.topic.filteredTopics
  );
  const topicsCount = filteredTopics.length;
  const selectedTopic = useSelector(
    (state: RootState) => state.topic.selectedTopic
  );
  const { selectedPage } = selectedTopic;

  const deselectTopic = () => {
    dispatch(
      setSelectedTopic({
        selectedTopic: {
          ...selectedTopic,
          selectedPage: BACK_PAGE_MAPPER[selectedPage],
        },
      })
    );
  };

  const selectTopic = (
    selectedTopicIndex: number,
    selectionType: ITopicSelectionType
  ) => {
    const topicIndex = getTopicIndex(
      selectedTopicIndex,
      selectionType,
      topicsCount
    );
    dispatch(
      setSelectedTopic({
        selectedTopic: {
          selectedPage: DETAILS_PAGE_SELECT,
          topicIndex,
          swipeType: selectionType,
          ...filteredTopics[topicIndex],
        },
      })
    );
  };

  const openTopicLink = () => {
    dispatch(
      setSelectedTopic({
        selectedTopic: { ...selectedTopic, selectedPage: LINK_PAGE_SELECT },
      })
    );
  };

  return { selectTopic, deselectTopic, openTopicLink };
};
