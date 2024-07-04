import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ITopic,
  ISelectedTopic,
  IBookmarkedTopics,
  ICompleteBookMarkAction,
} from "@types";
import {
  updateBookmarkedTopics,
  updateRecentlyviewedTopicList,
} from "../utils/app";
import { DEFAULT_TOPIC_STATE } from "@constants";

export const topicSlice = createSlice({
  name: "topic",
  initialState: DEFAULT_TOPIC_STATE,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    loadTopcis: (
      state,
      action: PayloadAction<{
        categories: string[];
        topics: ITopic[];
        bookmarked: IBookmarkedTopics;
      }>
    ) => {
      const { topics, categories, bookmarked } = action.payload;
      state.isAppLoaded = true;
      state.topics = [...topics];
      state.filteredTopics = topics;
      state.categories = categories;
      state.bookmarkedTopics = bookmarked;
    },
    initiateBookmarkAction: (
      state,
      action: PayloadAction<{
        bookmarkedTopics: IBookmarkedTopics;
        filteredTopics?: ITopic[];
      }>
    ) => {
      const { bookmarkedTopics, filteredTopics } = action.payload;
      state.bookmarkedTopics = {
        ...state.bookmarkedTopics,
        ...bookmarkedTopics,
      };
      if (filteredTopics) {
        state.filteredTopics = filteredTopics;
      }
    },
    setSelectedTopic: (
      state,
      action: PayloadAction<{ selectedTopic: ISelectedTopic }>
    ) => {
      const { selectedTopic } = action.payload;
      state.recentlyViewedTopics = updateRecentlyviewedTopicList(
        state.recentlyViewedTopics,
        selectedTopic
      );
      state.selectedTopic = selectedTopic;
    },
    setFilteredTopics: (
      state,
      action: PayloadAction<{
        filteredTopics: ITopic[];
        selectedTopic?: ISelectedTopic | null;
      }>
    ) => {
      const { selectedTopic, filteredTopics } = action.payload;
      if (selectedTopic) {
        state.recentlyViewedTopics = updateRecentlyviewedTopicList(
          state.recentlyViewedTopics,
          selectedTopic
        );
        state.selectedTopic = selectedTopic;
      }
      state.filteredTopics = filteredTopics;
    },
    completeBookMarkAction: (
      state,
      action: PayloadAction<ICompleteBookMarkAction>
    ) => {
      const { actionType } = action.payload;

      const { filteredTopics, bookmarkedTopics } = updateBookmarkedTopics(
        actionType,
        {
          bookmarkedTopics: state.bookmarkedTopics,
          filteredTopics: state.filteredTopics,
          ...action.payload,
        }
      );
      state.bookmarkedTopics = bookmarkedTopics;
      state.filteredTopics = filteredTopics;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadTopcis,
  setSelectedTopic,
  setFilteredTopics,
  initiateBookmarkAction,
  completeBookMarkAction,
  setLoading,
} = topicSlice.actions;

export default topicSlice.reducer;
