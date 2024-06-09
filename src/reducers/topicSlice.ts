import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITopic, ISelectedTopic } from "../type";
import { FILTER_BY_LIST } from "../constants";

export interface TopicState {
  selectedTopicCategory: string;
  isLoading: boolean;
  topics: ITopic[];
  selectedTopic: ISelectedTopic;
  categories: string[];
  selectedCategory: string[];
  filterByList: string[];
  selectedFilterBy: string[];
  selectedRelevance: string[];
}

const initialState: TopicState = {
  selectedTopicCategory: "Cyber Security",
  isLoading: true,
  topics: [],
  categories: [],
  selectedTopic: {
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
  selectedFilterBy: ["Recent"],
  selectedCategory: [],
  selectedRelevance: [],
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
      state.topics = topics;
      state.categories = categories;
    },
    setSelectedTopic: (state, action: PayloadAction<ISelectedTopic>) => {
      state.selectedTopic = action.payload;
    },
    setSelectedTopicCategory: (state, action: PayloadAction<string>) => {
      state.selectedTopicCategory = action.payload;
    },
    setFilterBy: (state, action: PayloadAction<string[]>) => {
      state.selectedFilterBy = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string[]>) => {
      state.selectedCategory = action.payload;
    },
    setSelectedRelevance: (state, action: PayloadAction<string[]>) => {
      state.selectedRelevance = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loadTopcis,
  setSelectedTopic,
  setSelectedTopicCategory,
  setFilterBy,
  setSelectedCategory,
  setSelectedRelevance,
} = topicSlice.actions;

export default topicSlice.reducer;
