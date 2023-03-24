import { createSlice } from "@reduxjs/toolkit";

export const users = createSlice({
  name: "users",
  initialState: {
    topUsers: [],
    userInfo: {},
  },
  reducers: {
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setTopUsers, setUserInfo } = users.actions;

export default users.reducer;
