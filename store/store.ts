import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersReducer";
import modalReducer from "./modalReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    modal: modalReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
