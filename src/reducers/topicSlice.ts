import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITopic, ISelectedTopic } from "../type";

export interface TopicState {
  selectedTopicCategory: string;
  isLoading: boolean;
  topics: ITopic[];
  selectedTopic: ISelectedTopic;
  categoryies: string[];
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
  },
});

// Action creators are generated for each case reducer function
export const { loadTopcis, setSelectedTopic, setSelectedTopicCategory } =
  topicSlice.actions;

export default topicSlice.reducer;
