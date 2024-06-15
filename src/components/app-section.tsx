import { useSelector } from "react-redux";
import { RootState } from "../store";
import Filter from "./filter";
import TopicList from "./topic/list";
import SelectedTopic from "./topic/selected-topic";
import Loader from "./common/loader";
// import SearchTopic from "./common/search";

const AppSection = () => {
  const { selectedTopic, isLoading } = useSelector(
    (state: RootState) => state.topic
  );
  const { isSelected } = selectedTopic;

  return (
    <>
      {isLoading && <Loader />}
      <div
        className={`list-selected-topic-container ${
          isSelected ? "topic-selected" : ""
        }`}
      >
        <TopicList />
        <SelectedTopic />
        <Filter />
        {/* {isSearchBox && <SearchTopic />} */}
      </div>
    </>
  );
};

export default AppSection;
