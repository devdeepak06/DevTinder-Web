import { createSlice } from '@reduxjs/toolkit'


import { useReducer } from "react-redux";
const useSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser(state, action) {
      return action.payload;
    },
    removeUser(state, action) {
      return null
    },
  }
});

export const { addUser, removeUser } = useReducer.action;
export default useSlice.reducer;