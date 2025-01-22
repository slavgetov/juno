import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  firstName: string;
  nickname: string;
}

const initialState: UserState = {
  firstName: "",
  nickname: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    updateNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFirstName, updateNickname } = userSlice.actions;

export default userSlice.reducer;
