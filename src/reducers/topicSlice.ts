import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITopic, ISelectedTopic } from "../type";
import { FILTER_BY_LIST } from "../constants";

export interface TopicState {
  selectedTopicCategory: string;
  isLoading: boolean;
  topics: ITopic[];
  selectedTopic: ISelectedTopic;
  categoryies: string[];
  selectedCategory: string[];
  filterByList: string[];
  selectedFilterBy: string[];
}

const initialState: TopicState = {
  selectedTopicCategory: "Cyber Security",
  isLoading: true,
  topics: [],
  categoryies: [],
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
};

export const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    loadTopcis: (
      state,
      action: PayloadAction<{ categoryies: string[]; topics: ITopic[] }>
    ) => {
      const { topics, categoryies } = action.payload;
      state.isLoading = false;
      state.topics = topics;
      state.categoryies = categoryies;
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
  },
});

// Action creators are generated for each case reducer function
export const {
  loadTopcis,
  setSelectedTopic,
  setSelectedTopicCategory,
  setFilterBy,
  setSelectedCategory,
} = topicSlice.actions;

export default topicSlice.reducer;
