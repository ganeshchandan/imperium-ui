import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setSelectedTopic } from "../reducers/topic";

export const useCloseDetailsPage = () => {
  const selectedTopic = useSelector(
    (state: RootState) => state.topic.selectedTopic
  );
  const dispatch = useDispatch();

  const backToTopicList = () => {
    dispatch(setSelectedTopic({ ...selectedTopic, isSelected: false }));
  };
  return { backToTopicList };
};
