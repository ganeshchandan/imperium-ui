import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITopic, ISelectedTopic } from "../type";
import { FILTER_BY_LIST } from "../constants";

export interface TopicState {
  isLoading: boolean;
  topics: ITopic[];
  filteredTopics: ITopic[];
  selectedTopic: ISelectedTopic;
  categories: string[];
  filterByList: string[];
}

const initialState: TopicState = {
  isLoading: true,
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
  },
  filterByList: FILTER_BY_LIST,
};

export const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    loadTopcis: (
      state,
      action: PayloadAction<{ categories: string[]; topics: ITopic[] }>
    ) => {
      const { topics, categories } = action.payload;
      state.isLoading = false;
      state.topics = [...topics];
      state.filteredTopics = topics;
      state.categories = categories;
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
export const { loadTopcis, setSelectedTopic, setFilteredTopics } =
  topicSlice.actions;

export default topicSlice.reducer;
