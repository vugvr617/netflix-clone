import { createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import type { RootState } from "./store";

// Define a type for the slice state
interface IUserState {
  user: User | null;
  initialUserLoading: boolean;
}

// Define the initial state using that type
const initialState: IUserState = {
  user: null,
  initialUserLoading: true
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setInitialUserLoading: (state, action) => {
      state.initialUserLoading = action.payload;
    }
  },
});

export const { setUser,setInitialUserLoading } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.users.user;
export const selectUserLoading = (state: RootState) => state.users.initialUserLoading;

export default userSlice.reducer;
