import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITopic, ISelectedTopic, IBookmarkedTopics } from "@types";
import { updateRecentlyviewedTopicList } from "../utils/app";
import { DEFAULT_SELECTED_TOPIC } from "@constants";

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

const initialState: TopicState = {
  isLoading: false,
  isAppLoaded: false,
  topics: [],
  filteredTopics: [],
  categories: [],
  selectedTopic: DEFAULT_SELECTED_TOPIC,
  bookmarkedTopics: {},
  recentlyViewedTopics: [],
};

export const topicSlice = createSlice({
  name: "topic",
  initialState,
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
    updateTopicsBookmarkId: (
      state,
      action: PayloadAction<{
        bookmarkedTopics: IBookmarkedTopics;
        filteredTopics?: ITopic[];
      }>
    ) => {
      const { bookmarkedTopics, filteredTopics } = action.payload;
      state.bookmarkedTopics = bookmarkedTopics;
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
    setFilteredTopics: (state, action: PayloadAction<ITopic[]>) => {
      state.filteredTopics = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadTopcis,
  setSelectedTopic,
  setFilteredTopics,
  updateTopicsBookmarkId,
  setLoading,
} = topicSlice.actions;

export default topicSlice.reducer;
