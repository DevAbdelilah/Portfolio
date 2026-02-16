import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
