import { createSlice } from "@reduxjs/toolkit";

interface ContactState {
  isOpen: boolean;
  isError: boolean;
  message: string;
  isLoading: boolean;
}

const initialState: ContactState = {
  isOpen: false,
  isError: false,
  message: "",
  isLoading: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetState: (state) => {
      Object.assign(state, initialState);
      state.isLoading = true;
    },
    sentEmailSuccess: (state) => {
      state.isOpen = true;
      state.isError = false;
      state.message = "Thank you for reaching out! I'll get back to you soon.";
      state.isLoading = false;
    },
    sentEmailError: (state) => {
      state.isOpen = true;
      state.isError = true;
      state.message =
        "Failed to send your message. Please try again or contact me directly at [felipe.hashi@gmail.com].";
      state.isLoading = false;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    testLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const {
  resetState,
  sentEmailSuccess,
  sentEmailError,
  closeModal,
  testLoading,
} = contactSlice.actions;
export default contactSlice.reducer;
