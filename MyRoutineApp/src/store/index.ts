import { configureStore } from "@reduxjs/toolkit";
import skincareReducer from "./slices/skincareSlice";
import userProfileReducer from "./slices/userProfileSlice";

export const store = configureStore ({
    reducer: {
        userProfile: userProfileReducer,
        skincare: skincareReducer,
    }, 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;