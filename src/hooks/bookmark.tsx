import { IBookmarkedTopic, ITopic } from "@types";
import { bookmarkTopic, deleteBookmark } from "../actions/topic";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store";
import {
  getBookmarkTopicId,
  getFilteredTopics,
  getTopicListForFilterType,
} from "@utils";
import {
  setFilteredTopics,
  initiateBookmarkAction,
  setFilterType,
  completeBookMarkAction,
} from "@reducers";
import {
  ADD_ACTION,
  ALL,
  BOOKMARK_FILTER_TYPE,
  CATEGOTY_FILTER_TYPE,
  DELETE_ACTION,
} from "@constants";

export const useBookmarkAction = () => {
  const { topics, bookmarkedTopics } = useSelector(
    (state: RootState) => state.topic
  );
  const { selectedCategory, selectedRelavance, filterType } = useSelector(
    (state: RootState) => state.filter
  );
  const dispatch = useDispatch();

  const handleUpdateBookmarkId = (
    actionType: string,
    topicTitle: string,
    bookmarkedTopic: IBookmarkedTopic
  ) => {
    dispatch(
      completeBookMarkAction({
        actionType,
        filterType,
        topicTitle,
        selectedCategory,
        selectedRelavance,
        bookmarkedTopic,
      })
    );
  };

  const topicBookmark = (topic: ITopic) => {
    const { topic_title } = topic;
    const { bookmark_id: bookmarkId } = getBookmarkTopicId(
      bookmarkedTopics,
      topic_title
    );

    dispatch(
      initiateBookmarkAction({
        bookmarkedTopics: {
          [topic_title]: {
            ...topic,
            isLoading: true,
          },
        },
      })
    );

    if (bookmarkId) {
      deleteBookmark(bookmarkId).then(() => {
        handleUpdateBookmarkId(
          DELETE_ACTION,
          topic_title,
          bookmarkedTopics[topic_title]
        );
      });
    } else {
      bookmarkTopic(topic).then((response) => {
        const { bookmark } = response;
        handleUpdateBookmarkId(ADD_ACTION, topic_title, bookmark);
      });
    }
  };

  const filterBookmark = () => {
    const updateFilter =
      filterType !== BOOKMARK_FILTER_TYPE
        ? BOOKMARK_FILTER_TYPE
        : CATEGOTY_FILTER_TYPE;

    const topicLists = getTopicListForFilterType(
      updateFilter,
      topics,
      bookmarkedTopics,
      []
    );

    dispatch(setFilterType({ filterType: updateFilter }));

    const filteredTopics = getFilteredTopics(updateFilter, topicLists, {
      selectedCategory,
      selectedRelavance: [ALL],
    });

    dispatch(
      setFilteredTopics({
        filteredTopics,
      })
    );
  };

  return { topicBookmark, filterBookmark };
};
