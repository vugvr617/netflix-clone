import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
