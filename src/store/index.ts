import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../reducers/topicSlice";

export const store = configureStore({
  reducer: {
    topic: topicReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
