import { useDispatch, useSelector } from "react-redux";
import { setSelectedTopic } from "../../reducers/topic";
import { RootState } from "../../store";

const useCloseDetailsPage = () => {
  const selectedTopic = useSelector(
    (state: RootState) => state.topic.selectedTopic
  );
  const dispatch = useDispatch();

  const backToTopicList = () => {
    dispatch(setSelectedTopic({ ...selectedTopic, isSelected: false }));
  };
  return { backToTopicList };
};

export default useCloseDetailsPage;
