import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  showFilter: boolean;
  selectedCategory: string[];
  selectedFilterBy: string[];
  selectedRelevance: string[];
}

const initialState: FilterState = {
  showFilter: false,
  selectedFilterBy: ["Recent"],
  selectedCategory: ["Cyber Security"],
  selectedRelevance: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setShowFilter: (state, action: PayloadAction<boolean>) => {
      state.showFilter = action.payload;
    },
    setFilterBy: (state, action: PayloadAction<string[]>) => {
      // state.selectedCategory = [];
      state.selectedRelevance = [];
      state.selectedFilterBy = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string[]>) => {
      state.selectedFilterBy = [];
      state.selectedRelevance = [];
      state.selectedCategory = action.payload;
    },
    setSelectedRelevance: (state, action: PayloadAction<string[]>) => {
      state.selectedFilterBy = [];
      // state.selectedCategory = [];
      state.selectedRelevance = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setShowFilter,
  setFilterBy,
  setSelectedCategory,
  setSelectedRelevance,
} = filterSlice.actions;

export default filterSlice.reducer;
