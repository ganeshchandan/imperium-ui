import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  selectedCategory: string[];
  selectedFilterBy: string[];
  selectedRelevance: string[];
}

const initialState: FilterState = {
  selectedFilterBy: ["Recent"],
  selectedCategory: [],
  selectedRelevance: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
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
export const { setFilterBy, setSelectedCategory, setSelectedRelevance } =
  filterSlice.actions;

export default filterSlice.reducer;
