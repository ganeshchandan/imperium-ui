export interface ITopic {
  topic_id: number;
  topic_title: string;
  topic_short_description: string;
  topic_saved_date: string;
  topic_read_time: string;
  topic_catergory: string;
  topic_image: string;
}

export interface ISelectedTopic extends ITopic {
  isSelected: boolean;
}
