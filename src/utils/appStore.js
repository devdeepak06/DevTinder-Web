import { configureStore } from "@reduxjs/toolkit";
import { addUser, removeUser } from "./useSlice";


const appStore = configureStore({
  reducer: {
    addUser,
    removeUser
  }
});

export default appStore;