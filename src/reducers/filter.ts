import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  showFilter: boolean;
  selectedCategory: string[];
  selectedFilterBy: string[];
  relevanceList: string[];
  selectedRelavance: string[];
  showMenu: boolean;
}

const initialState: FilterState = {
  showFilter: false,
  selectedFilterBy: ["Recent"],
  selectedCategory: [],
  relevanceList: [],
  selectedRelavance: [],
  showMenu: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setShowFilter: (state, action: PayloadAction<boolean>) => {
      state.showFilter = action.payload;
    },
    setFilterBy: (state, action: PayloadAction<string[]>) => {
      state.selectedFilterBy = action.payload;
      state.showMenu = false;
    },
    setInitialDetails: (state, action: PayloadAction<string[]>) => {
      state.relevanceList = action.payload;
      state.selectedCategory = action.payload;
      state.showMenu = false;
    },
    setSelectedCategory: (state, action: PayloadAction<string[]>) => {
      state.selectedFilterBy = [];
      state.selectedRelavance = [];
      state.selectedCategory = action.payload;
      state.showMenu = false;
    },
    setRelevanceList: (state, action: PayloadAction<string[]>) => {
      state.relevanceList = action.payload;
      state.showMenu = false;
    },
    setSelectedRelevance: (state, action: PayloadAction<string[]>) => {
      state.selectedRelavance = action.payload;
    },
    setShowMenu: (state, action: PayloadAction<boolean>) => {
      state.showMenu = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setShowFilter,
  setFilterBy,
  setSelectedCategory,
  setRelevanceList,
  setSelectedRelevance,
  setShowMenu,
  setInitialDetails,
} = filterSlice.actions;

export default filterSlice.reducer;
