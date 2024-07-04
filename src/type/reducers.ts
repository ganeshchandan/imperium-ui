import {
  IBookmarkedTopic,
  IBookmarkedTopics,
  ISelectedTopic,
  ITopic,
} from "@types";

export interface TopicState {
  isLoading: boolean;
  isAppLoaded: boolean;
  topics: ITopic[];
  filteredTopics: ITopic[];
  selectedTopic: ISelectedTopic;
  categories: string[];
  bookmarkedTopics: IBookmarkedTopics;
  recentlyViewedTopics: ITopic[];
}

export interface ICompleteBookMarkAction {
  actionType: string;
  filterType: string;
  topicTitle: string;
  selectedCategory: string[];
  selectedRelavance: string[];
  bookmarkedTopic: IBookmarkedTopic;
}
