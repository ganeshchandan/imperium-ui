import { useDispatch } from "react-redux";
import { setSelectedTopic } from "../../../reducers/topic";
import { ISelectedTopic } from "../../../type";
import ActionBar from "./action-bar";

const SelectedTopic = ({
  selectedTopic,
}: {
  selectedTopic: ISelectedTopic;
}) => {
  const dispatch = useDispatch();
  const {
    topic_image,
    topic_title,
    topic_short_description,
    topic_saved_date,
  } = selectedTopic;

  const backToTopicList = () => {
    dispatch(setSelectedTopic({ ...selectedTopic, isSelected: false }));
  };

  return (
    <div className="selected-topic">
      <div className="selected-topic-image">
        <img src={topic_image} alt="Topic" />
      </div>
      <div className="selected-topic-content">
        <div className="topic-title">{topic_title}</div>
        <div className="topic_saved_date">{topic_saved_date}</div>
        <div className="topic_description">{topic_short_description}</div>
      </div>
      <ActionBar backToTopicList={backToTopicList} />
    </div>
  );
};

export default SelectedTopic;
