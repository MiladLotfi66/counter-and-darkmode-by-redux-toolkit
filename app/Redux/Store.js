import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/counterSlice";
import darkModeReducer from "./features/DarkMode/darkModeSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        darkMode: darkModeReducer
    },
});

export default store