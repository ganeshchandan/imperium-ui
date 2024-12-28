import { RootState } from "@store";
import { getPreviousAndNextTopic } from "@utils";
import Topic from "./topic-content";
import { useSelector } from "react-redux";
import { ISelectedTopic } from "@types";
import { FC } from "react";

const Topics: FC<{ selectedTopic: ISelectedTopic }> = ({ selectedTopic }) => {
  const filteredTopics = useSelector(
    (state: RootState) => state.topic.filteredTopics
  );
  const { topicIndex: selectedTopicIdnex } = selectedTopic;

  const { previousTopic, nextTopic } = getPreviousAndNextTopic(
    selectedTopicIdnex,
    filteredTopics.length,
    filteredTopics
  );

  return (
    <>
      {nextTopic && (
        <Topic
          selectedTopic={nextTopic as ISelectedTopic}
          className="next-topic"
        />
      )}
      <Topic selectedTopic={selectedTopic} className="selected-topic" />
      {previousTopic && (
        <Topic
          selectedTopic={previousTopic as ISelectedTopic}
          className="previous-topic"
        />
      )}
    </>
  );
};

export default Topics;
