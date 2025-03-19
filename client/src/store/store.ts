import { configureStore } from "@reduxjs/toolkit";
import dropdownReducer from "../features/dropdown/dropdownSlice";
import contactReducer from "../features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    dropdown: dropdownReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
