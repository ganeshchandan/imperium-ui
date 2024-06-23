import { IBookmarkedTopic, ITopic, TSearchResults, TViewType } from ".";

export interface ISearchResultItem {
  searchResult: TSearchResults;
  searchValue: string;
}

export interface ISearchResults {
  searchResults: TSearchResults[];
  searchValue: string;
}

export interface ITopicTileContent {
  topic_title: string;
  topic_short_description: string;
}

export interface ITopicTileFooter {
  topic: ITopic;
  bookmarkDetails: IBookmarkedTopic;
}

export interface ITopicList {
  topic: ITopic;
  topicIndex: number;
  bookmarkDetails: IBookmarkedTopic;
  viewType: TViewType;
}
