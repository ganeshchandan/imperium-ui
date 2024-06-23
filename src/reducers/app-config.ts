import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TViewType } from "@types";
import { TOPIC_LIST } from "@constants";

export interface AppConfigState {
  viewType: TViewType;
}

const initialState: AppConfigState = {
  viewType: TOPIC_LIST,
};

export const AppConfig = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    updateApplicationView: (state, action: PayloadAction<TViewType>) => {
      state.viewType = action.payload;
    },
  },
});

export const { updateApplicationView } = AppConfig.actions;

export default AppConfig.reducer;
