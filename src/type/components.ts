import { FC } from "react";
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
export interface IFilterRelevanceAction {
  handleActionButtonClick: (action: string) => void;
}

export interface IFilterRelevanceTabs {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface IFilterByCategory {
  listItems: string[];
  updatedSelectedItems: string[];
  handleSelected: (selectedItems: string[]) => void;
  isMultipleSelection: boolean;
}

export interface IFilterRelevanceContent {
  selectedTab: string;
}

export interface ICategoryAndFilterByList {
  listItems: string[];
  selectedItems: string[];
  handleSelected: (selectedItems: string[]) => void;
  isMultipleSelection: boolean;
  Component: FC<IFilterByCategory>;
}

export interface ICategoryList {
  categories: string[];
  selectedRelevance: string[];
}

export interface ICategoryMenu {
  showMenu: boolean;
}

export interface ITopicListHeader {
  selectedCategory: string[];
  viewType: TViewType;
}

export interface ITopicImage {
  topic_image: string;
}

export interface IActionBar {
  backToTopicList: () => void;
  handleShare?: () => void;
  topic?: ITopic;
  bookmarkDetails?: IBookmarkedTopic;
  enableBookmarkAndShare: boolean;
}
