import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TFilterType } from "@types";
import { ALL, CATEGOTY_FILTER_TYPE } from "@constants";

export interface FilterState {
  showFilter: boolean;
  selectedCategory: string[];
  relevanceList: string[];
  selectedRelavance: string[];
  showMenu: boolean;
  filterType: TFilterType;
}

const initialState: FilterState = {
  showFilter: false,
  selectedCategory: [],
  relevanceList: [],
  selectedRelavance: [ALL],
  showMenu: false,
  filterType: CATEGOTY_FILTER_TYPE,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterType: (
      state,
      action: PayloadAction<{ filterType: TFilterType }>
    ) => {
      const { filterType } = action.payload;
      state.selectedRelavance = [];
      state.filterType = filterType;
      state.showMenu = false;
    },
    setShowFilter: (state, action: PayloadAction<boolean>) => {
      state.showFilter = action.payload;
    },
    setInitialDetails: (state, action: PayloadAction<string[]>) => {
      state.relevanceList = action.payload;
      state.selectedCategory = action.payload;
      state.showMenu = false;
    },
    setSelectedCategory: (state, action: PayloadAction<string[]>) => {
      state.selectedRelavance = [ALL];
      state.selectedCategory = action.payload;
      state.filterType = CATEGOTY_FILTER_TYPE;
      state.showMenu = false;
    },
    setRelevanceList: (state, action: PayloadAction<string[]>) => {
      state.relevanceList = action.payload;
      state.showMenu = false;
    },
    setSelectedRelevance: (
      state,
      action: PayloadAction<{
        selectedRelavance: string[];
        filterType: TFilterType;
      }>
    ) => {
      const { selectedRelavance, filterType } = action.payload;
      state.selectedRelavance = selectedRelavance;
      state.filterType = filterType;
    },
    setShowMenu: (state, action: PayloadAction<boolean>) => {
      state.showMenu = action.payload;
    },
  },
});

export const {
  setShowFilter,
  setSelectedCategory,
  setRelevanceList,
  setSelectedRelevance,
  setShowMenu,
  setInitialDetails,
  setFilterType,
} = filterSlice.actions;

export default filterSlice.reducer;
