import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openDropdown: (state) => {
      state.isOpen = true;
    },
    closeDropdown: (state) => {
      console.log("DROPDOWN")
      state.isOpen = false;
    },
  },
});

export const { openDropdown, closeDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
