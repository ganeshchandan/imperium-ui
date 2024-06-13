import { TSwipeIndesFinder } from "../type";

export const swipeUpTopicId: TSwipeIndesFinder = (topicIndex, topicsCount) => {
  const previousTopicIndex = topicIndex - 1;
  return (previousTopicIndex + topicsCount) % topicsCount;
};

export const swipeDownTopicId: TSwipeIndesFinder = (
  topicIndex,
  topicsCount
) => {
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
