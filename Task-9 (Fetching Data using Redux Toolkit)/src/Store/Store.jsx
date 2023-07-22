import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../Posts/PostSlice";

const store = configureStore(
    {
        reducer: {
            posts: PostSlice,
        }
    }
)
export default store;