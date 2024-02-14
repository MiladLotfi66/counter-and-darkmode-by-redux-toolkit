import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
};

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        reverseDarkMode: (state) => {
            state.darkMode =!state.darkMode;
        },
      
       
    },
});

export const { reverseDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;

export const selectDarkMode = (state) => state.darkMode.darkMode;
// export const selectCounter = (state) => state.counter.darkMode;
