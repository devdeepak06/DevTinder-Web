import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { addUser, removeUser } from "./useSlice";


const appStore = configureStore({
  reducer: {
    addUser,
    removeUser
=======
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer
>>>>>>> 1ece36bbc5d842c4677162238d89c34cf5725c33
  }
});

export default appStore;