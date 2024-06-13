export interface ITopic {
  topic_id: number;
  topic_title: string;
  topic_short_description: string;
  topic_saved_date: string;
  topic_read_time: string;
  topic_category: string;
  topic_image: string;
}

export interface ISelectedTopic extends ITopic {
  topicIndex: number;
  isSelected: boolean;
  swipeType: "none" | "up" | "down";
}

export type TSwipeIndesFinder = (
  topicIndex: number,
  topicsCount: number
) => number;
