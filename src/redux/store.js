import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/tasksSlice";
import userSlice from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
    userSlice: userSlice,
  },
});
