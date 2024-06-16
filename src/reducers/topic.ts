import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITopic, ISelectedTopic, IBookmarkedTopics } from "../type";
import { FILTER_BY_LIST } from "../constants";

export interface TopicState {
  isLoading: boolean;
  isAppLoaded: boolean;
  topics: ITopic[];
  filteredTopics: ITopic[];
  selectedTopic: ISelectedTopic;
  categories: string[];
  filterByList: string[];
  isSearchBox: boolean;
  bookmarkedTopics: IBookmarkedTopics;
}

const initialState: TopicState = {
  isLoading: false,
  isAppLoaded: false,
  topics: [],
  filteredTopics: [],
  categories: [],
  selectedTopic: {
    topicIndex: -1,
    swipeType: "none",
    isSelected: false,
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
  },
  filterByList: FILTER_BY_LIST,
  isSearchBox: false,
  bookmarkedTopics: {},
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
    setSelectedTopic: (state, action: PayloadAction<ISelectedTopic>) => {
      state.selectedTopic = action.payload;
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
