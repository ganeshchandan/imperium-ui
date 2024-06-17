import { ADD_ACTION, BOOKMARK_FILTER_TYPE, DELETE_ACTION } from "../constants";
import { IBookmarkedTopic, IBookmarkedTopics, ITopic } from "../type";
import { getFilteredTopics, getTopicListForFilterType } from "./filter";

interface IUpdateBookmarkedTopics {
  filterType: string;
  topicTitle: string;
  bookmarkedTopics: IBookmarkedTopics;
  filteredTopics: ITopic[];
  selectedCategory: string[];
  selectedRelavance: string[];
  bookmarkedTopic: IBookmarkedTopic;
}

type TAddBookmarkedTopic = (config: IUpdateBookmarkedTopics) => {
  bookmarkedTopics: IBookmarkedTopics;
  filteredTopics: ITopic[];
};

const deleteBookmarkedTopic: TAddBookmarkedTopic = ({
  filterType,
  topicTitle,
  bookmarkedTopics,
  filteredTopics,
  selectedCategory,
  selectedRelavance,
}) => {
  const updatedBookmarkedTopics = Object.keys(bookmarkedTopics).reduce(
    (updatedBookmark, bookmark_topic_title) => {
      if (bookmark_topic_title !== topicTitle) {
        return {
          ...updatedBookmark,
          [bookmark_topic_title]: bookmarkedTopics[bookmark_topic_title],
        };
      }
      return updatedBookmark;
    },
    {} as IBookmarkedTopics
  );

  let updatedFilteredTopics = filteredTopics;

  if (filterType === BOOKMARK_FILTER_TYPE) {
    const topicLists = getTopicListForFilterType(
      filterType,
      filteredTopics,
      updatedBookmarkedTopics
    );

    updatedFilteredTopics = getFilteredTopics(filterType, topicLists, {
      selectedCategory,
      selectedRelavance,
    });
  }

  return {
    bookmarkedTopics: updatedBookmarkedTopics,
    filteredTopics: updatedFilteredTopics,
  };
};

const addBookmarkedTopic: TAddBookmarkedTopic = ({
  topicTitle,
  bookmarkedTopics,
  filteredTopics,
  bookmarkedTopic,
}) => {
  return {
    bookmarkedTopics: {
      ...bookmarkedTopics,
      [topicTitle]: bookmarkedTopic,
    },
    filteredTopics,
  };
};

const bookmarkActionMapper: {
  [key: string]: TAddBookmarkedTopic;
} = {
  [DELETE_ACTION]: deleteBookmarkedTopic,
  [ADD_ACTION]: addBookmarkedTopic,
};

export const updateBookmarkedTopics = (
  actionType: string,
  config: IUpdateBookmarkedTopics
) => {
  return bookmarkActionMapper[actionType](config);
};
