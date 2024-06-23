import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITopic, ISelectedTopic, IBookmarkedTopics } from "@types";
import { updateRecentlyviewedTopicList } from "../utils/app";
import { LIST_PAGE_SELECT } from "@constants";

export interface TopicState {
  isLoading: boolean;
  isAppLoaded: boolean;
  topics: ITopic[];
  filteredTopics: ITopic[];
  selectedTopic: ISelectedTopic;
  categories: string[];
  isSearchBox: boolean;
  bookmarkedTopics: IBookmarkedTopics;
  recentlyViewedTopics: ITopic[];
}

const initialState: TopicState = {
  isLoading: false,
  isAppLoaded: false,
  topics: [],
  filteredTopics: [],
  categories: [],
  selectedTopic: {
    topicIndex: -1,
    swipeType: "click",
    selectedPage: LIST_PAGE_SELECT,
    topic_id: 0,
    topic_title: "",
    topic_short_description: "",
    topic_saved_date: "",
    topic_read_time: "",
    topic_category: "",
    topic_image: "",
    bookmarked_date: "",
    author: "",
    bookmark_id: null,
    topic_link: "",
  },
  isSearchBox: false,
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
    setSearchBox: (state, action: PayloadAction<boolean>) => {
      state.isSearchBox = action.payload;
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
      // state.isLoading = false;
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
  setSearchBox,
} = topicSlice.actions;

export default topicSlice.reducer;
