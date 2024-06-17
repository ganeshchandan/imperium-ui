import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TFilterType } from "../type";
import { CATEGOTY_FILTER_TYPE } from "../constants";

export interface FilterState {
  showFilter: boolean;
  selectedCategory: string[];
  selectedFilterBy: string[];
  relevanceList: string[];
  selectedRelavance: string[];
  showMenu: boolean;
  filterType: TFilterType;
  recentViewedTopics: string[];
}

const initialState: FilterState = {
  showFilter: false,
  selectedFilterBy: ["Recent"],
  selectedCategory: [],
  relevanceList: [],
  selectedRelavance: [],
  showMenu: false,
  filterType: CATEGOTY_FILTER_TYPE,
  recentViewedTopics: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterType: (state, action: PayloadAction<TFilterType>) => {
      state.filterType = action.payload;
    },
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
      state.filterType = CATEGOTY_FILTER_TYPE;
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
    setLastViewdTopics: (state, action: PayloadAction<string[]>) => {
      state.recentViewedTopics = action.payload;
    },
  },
});

export const {
  setShowFilter,
  setFilterBy,
  setSelectedCategory,
  setRelevanceList,
  setSelectedRelevance,
  setShowMenu,
  setInitialDetails,
  setFilterType,
  setLastViewdTopics,
} = filterSlice.actions;

export default filterSlice.reducer;
