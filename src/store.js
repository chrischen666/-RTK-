import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slice/messageSlice";

export default configureStore({
    reducer: {
        message: messageReducer
    }
})