import { createSlice } from "@reduxjs/toolkit";

export const users = createSlice({
  name: "users",
  initialState: {
    topUsers: [],
  },
  reducers: {
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});

export const { setTopUsers } = users.actions;

export default users.reducer;
