import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TViewType } from "@types";
import { TOPIC_LIST } from "@constants";

export interface AppConfigState {
  viewType: TViewType;
  isSearchBox: boolean;
  showUserProfile: boolean;
}

const initialState: AppConfigState = {
  viewType: TOPIC_LIST,
  isSearchBox: false,
  showUserProfile: false,
};

export const AppConfig = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    updateApplicationView: (state, action: PayloadAction<TViewType>) => {
      state.viewType = action.payload;
    },
    setSearchBox: (state, action: PayloadAction<boolean>) => {
      state.isSearchBox = action.payload;
    },
    setShowUserProfile: (state, action: PayloadAction<boolean>) => {
      state.showUserProfile = action.payload;
    },
  },
});

export const { updateApplicationView, setSearchBox, setShowUserProfile } =
  AppConfig.actions;

export default AppConfig.reducer;
