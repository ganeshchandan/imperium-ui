import { ITopic, TSwipeIndesFinder } from "@types";

export const swipeDownTopicId: TSwipeIndesFinder = (
  topicIndex,
  topicsCount
) => {
  const previousTopicIndex = topicIndex - 1;
  return (previousTopicIndex + topicsCount) % topicsCount;
};

export const swipeUpTopicId: TSwipeIndesFinder = (topicIndex, topicsCount) => {
  let nextTopicIndex = topicIndex + 1;
  return (nextTopicIndex = nextTopicIndex % topicsCount);
};

const topicIdAndSwipeMapper: { [key: string]: TSwipeIndesFinder } = {
  up: swipeUpTopicId,
  down: swipeDownTopicId,
};

export const nextDisplayTopicIndex = (
  swipeType: string,
  topicsCount: number,
  topicIndex: number
) => topicIdAndSwipeMapper[swipeType](topicIndex, topicsCount);

export const getClickedTopicIndex: TSwipeIndesFinder = (topicIndex) =>
  topicIndex;

export const TOPIC_INDEX_GETTER: {
  [key: string]: TSwipeIndesFinder;
} = {
  click: getClickedTopicIndex,
  swipe_up: swipeUpTopicId,
  swipe_down: swipeDownTopicId,
};

export type ITopicSelectionType = "click" | "swipe_up" | "swipe_down";

export const getTopicIndex = (
  topicIndex: number,
  selectionType: ITopicSelectionType,
  topicsCount: number
) => TOPIC_INDEX_GETTER[selectionType](topicIndex, topicsCount);

export const getPreviousAndNextTopic = (
  topicIndex: number,
  topicsCount: number,
  topics: ITopic[]
) => {
  return {
    previousTopic: topics[swipeDownTopicId(topicIndex, topicsCount)],
    nextTopic: topics[swipeUpTopicId(topicIndex, topicsCount)],
  };
};

export const selectedTopicHandler = (
  timerRef: NodeJS.Timeout,
  topicListRefElement: HTMLElement | null,
  topicIndex: number,
  swipeType: ITopicSelectionType,
  selectTopic: (
    selectedTopicIndex: number,
    selectionType: ITopicSelectionType
  ) => void
) => {
  if (topicListRefElement) {
    topicListRefElement.classList.add(swipeType);
    topicListRefElement.classList.add(`transition`);
    clearTimeout(timerRef);
    timerRef = setTimeout(() => {
      topicListRefElement.classList.remove("transition");
      topicListRefElement.classList.remove(swipeType);
      selectTopic(topicIndex, swipeType);
    }, 4000);
  }
};
