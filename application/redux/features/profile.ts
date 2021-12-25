// a profile slice that has name and email values

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProfileState = {
  name: string;
  email: string;
};

const initialState: ProfileState = {
  name: "",
  email: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});
