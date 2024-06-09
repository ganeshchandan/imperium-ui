import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../reducers/topic";
import filterReducer from "../reducers/filter";

export const store = configureStore({
  reducer: {
    topic: topicReducer,
    filter: filterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
