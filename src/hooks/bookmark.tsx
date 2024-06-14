import { ITopic } from "../type";
import { bookmarkTopic, deleteBookmark } from "../actions/topic";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { getFilteredTopics, getUpdatedBookmarkId } from "../utils/app";
import {
  setFilteredTopics,
  setLoading,
  setSelectedTopic,
  updateTopicsBookmarkId,
} from "../reducers/topic";
import { BOOKMARK_FILTER_TYPE, CATEGOTY_FILTER_TYPE } from "../constants";
import { setFilterType } from "../reducers/filter";

export const useBookmarkAction = () => {
  const { topics, selectedTopic } = useSelector(
    (state: RootState) => state.topic
  );
  const { selectedCategory, selectedRelavance, filterType } = useSelector(
    (state: RootState) => state.filter
  );
  const dispatch = useDispatch();

  const handleUpdateBookmarkId = (
    topic_title: string,
    bookmarkId: number | null,
    isSelected: boolean
  ) => {
    const updatedTopics = getUpdatedBookmarkId(topics, topic_title, bookmarkId);
    if (isSelected) {
      dispatch(setSelectedTopic({ ...selectedTopic, bookmark_id: bookmarkId }));
    }
    dispatch(
      updateTopicsBookmarkId({
        filteredTopics: getFilteredTopics(filterType, {
          topics: updatedTopics,
          selectedCategory,
          selectedRelavance,
        }),
        topics: updatedTopics,
      })
    );
  };

  const topicBookmark = (topic: ITopic, isSelected: boolean) => {
    const { bookmark_id, topic_title } = topic;
    dispatch(setLoading(true));
    if (bookmark_id) {
      deleteBookmark(bookmark_id).then(() => {
        handleUpdateBookmarkId(topic_title, null, isSelected);
      });
    } else {
      bookmarkTopic(topic).then((response) => {
        const { bookmark_id } = response;
        handleUpdateBookmarkId(topic_title, bookmark_id, isSelected);
      });
    }
  };

  const filterBookmark = () => {
    const updateFilter =
      filterType !== BOOKMARK_FILTER_TYPE
        ? BOOKMARK_FILTER_TYPE
        : CATEGOTY_FILTER_TYPE;
    dispatch(setFilterType(updateFilter));
    dispatch(
      setFilteredTopics(
        getFilteredTopics(updateFilter, {
          topics: topics,
          selectedCategory,
          selectedRelavance,
        })
      )
    );
  };
  return { topicBookmark, filterBookmark };
};
