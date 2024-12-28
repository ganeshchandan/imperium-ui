export interface ITopic {
  author: string;
  topic_id: number;
  topic_title: string;
  topic_short_description: string;
  topic_saved_date: string;
  topic_read_time: string;
  topic_category: string;
  topic_image: string;
  topic_link: string;
  bookmark_id: number | null;
  bookmarked_date: string;
}

export interface IBookmarkedTopic extends ITopic {
  isLoading?: boolean;
  bookmark_id: number | null;
  bookmarked_date: string;
}

export interface IBookmarkedTopics {
  [key: string]: IBookmarkedTopic;
}

export type TSelectedPage = "list-page" | "details-page" | "link-page";

export interface ISelectedTopic extends ITopic {
  topicIndex: number;
  selectedPage: TSelectedPage;
  swipeType: ITopicSelectionType;
}

export type TSwipeIndesFinder = (
  topicIndex: number,
  topicsCount: number
) => number;

export type TFilterType =
  | "bookmark"
  | "category"
  | "none"
  | "search"
  | "recentlyViewed";

export interface IGetFilteredTopics {
  selectedCategory?: string[];
  selectedRelavance?: string[];
  searchValue?: string;
  recentlyViewedTopics?: ITopic[];
  searchBy?: TSearchByColumn;
}

export type TSearchByColumn = "topic_short_description" | "topic_title" | "";

export type TViewType = "topic-grid" | "topic-list";

export type TSearchResults = { searchBy: TSearchByColumn; searchvalue: string };

export type ITopicSelectionType = "click" | "swipe_up" | "swipe_down";

export * from "./components";
export * from "./reducers";
