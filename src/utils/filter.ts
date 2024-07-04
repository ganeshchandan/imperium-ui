import {
  IBookmarkedTopics,
  IGetFilteredTopics,
  ITopic,
  TFilterType,
} from "@types";
import { searchTopics } from "./search";
import { ALL, RECENTLY_VIEWED } from "@constants";

type ISortTopic = (topics: ITopic[]) => ITopic[];
type TGetTopicListForFilterTypeMapper = (topics: {
  bookmarkedTopics: IBookmarkedTopics;
  topics: ITopic[];
  recentlyViewedTopics: ITopic[];
}) => ITopic[];

/**
 * Sorts the bookmared topics, latest bookmarked topics will be at top of lists
 */
const sortBookmarkedTopic: ISortTopic = (topics) =>
  topics.sort((source, target) => {
    const { bookmarked_date: sourceDate } = source;
    const { bookmarked_date: targetDate } = target;
    return new Date(targetDate).getTime() - new Date(sourceDate).getTime();
  });

/**
 * returns true when the passed topic category is part of the seleceted relavance.
 * @param Topic as a input
 * @param selectedRelavance as input
 */
const bookmarkFilter = (
  { topic_category }: ITopic,
  { selectedRelavance = [] }: IGetFilteredTopics
) =>
  selectedRelavance.includes(ALL) || selectedRelavance.includes(topic_category);

/**
 * returns true when the passed topic category is part of the seleceted categories.
 * @param Topic as a input
 * @param selectedRelavance as input
 */
const categoryFilter = (
  { topic_category }: ITopic,
  { selectedCategory = [], selectedRelavance = [] }: IGetFilteredTopics
) =>
  (selectedCategory.length === 0 ||
    selectedCategory.includes(topic_category)) &&
  (selectedRelavance.includes(ALL) ||
    selectedRelavance.includes(topic_category));

/**
 * Filter function mapper, key will be type fiter and value will be corresponding filter condition logic method
 */
const filterTypeFunctionMapper: {
  [key: string]: (topic: ITopic, filterDetails: IGetFilteredTopics) => boolean;
} = {
  bookmark: bookmarkFilter,
  category: categoryFilter,
  search: searchTopics,
};

/**
 * Sort function mapper, key will be type sort and value will be corresponding Sort method
 */
const sortFilterFunctionMapper: {
  [key: string]: ISortTopic;
} = {
  bookmark: sortBookmarkedTopic,
  category: (topics: ITopic[]) => topics,
  search: (topics: ITopic[]) => topics,
  recentlyViewed: (topics: ITopic[]) => topics,
};

/**
 * Returns the filtered topic list according to filter cateria
 */
export const getFilteredTopics = (
  filterType: TFilterType,
  topics: ITopic[],
  filterDetails: IGetFilteredTopics
) => {
  if (filterType === RECENTLY_VIEWED) {
    return topics;
  }
  const filteredTopic = topics.filter((topic) => {
    return filterTypeFunctionMapper[filterType](topic, filterDetails);
  });
  return filteredTopic;
};

/**
 * Returns the sorted topic list according to sort cateria
 */
export const getSortedTopics = (filterType: TFilterType, topics: ITopic[]) => {
  return sortFilterFunctionMapper[filterType](topics);
};

export const commonTopicsReturn: TGetTopicListForFilterTypeMapper = ({
  topics,
}) => topics;

const getTopicListForFilterTypeMapper: {
  [key: string]: TGetTopicListForFilterTypeMapper;
} = {
  bookmark: ({ bookmarkedTopics }) => Object.values(bookmarkedTopics),
  category: commonTopicsReturn,
  search: commonTopicsReturn,
  recentlyViewed: ({ recentlyViewedTopics }) => recentlyViewedTopics,
};

export const getTopicListForFilterType = (
  filterType: TFilterType,
  topics: ITopic[],
  bookmarkedTopics: IBookmarkedTopics,
  recentlyViewedTopics: ITopic[]
) =>
  getTopicListForFilterTypeMapper[filterType]({
    topics,
    bookmarkedTopics,
    recentlyViewedTopics,
  });
