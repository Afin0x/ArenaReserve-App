import { configureStore } from '@reduxjs/toolkit';
import userSlicer from "./userSlice";
import authSlicer from "./authSlice";
import addTurf from "./addTurf"

const store = configureStore({
  reducer: {
    users: userSlicer,
    auth: authSlicer, // 💥 Not user, bro! Make it 'auth'
    turfs:addTurf,
  }
});

export default store;
