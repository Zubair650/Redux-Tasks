import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Counter/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})

export default store;