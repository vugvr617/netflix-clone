import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IMovie } from "../interfaces/IData";

interface IModal {
  isModalShown: boolean;
  currentMovie: IMovie | null;
}

const initialState: IModal = {
  isModalShown: false,
  currentMovie: null,
};

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setModalShown: (state, action) => {
      state.isModalShown = action.payload;
    },
    setCurrentMovie: (state, action) => {
        state.currentMovie = action.payload;
    }
  },
});

export const { setModalShown, setCurrentMovie } = modalSlice.actions;

export const selectModalShown = (state: RootState) => {
  return state.modal.isModalShown;
};

export const selectCurrentMovie = (state: RootState) => {
  return state.modal.currentMovie;
};
export default modalSlice.reducer;
