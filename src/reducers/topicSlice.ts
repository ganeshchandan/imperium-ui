import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITopic, ISelectedTopic } from "../type";

export interface TopicState {
  isLoading: boolean;
  topics: ITopic[];
  selectedTopic: ISelectedTopic;
}

const initialState: TopicState = {
  isLoading: true,
  topics: [],
  selectedTopic: {
    isSelected: false,
    topic_id: 0,
    topic_title: "",
    topic_short_description: "",
    topic_saved_date: "",
    topic_read_time: "",
    topic_catergory: "",
    topic_image: "",
  },
};

export const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    loadTopcis: (state, action: PayloadAction<ITopic[]>) => {
      state.isLoading = false;
      state.topics = action.payload;
    },
    setSelectedTopic: (state, action: PayloadAction<ISelectedTopic>) => {
      state.selectedTopic = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadTopcis, setSelectedTopic } = topicSlice.actions;

export default topicSlice.reducer;
