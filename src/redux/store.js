import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import navReducer from "./slices/navSlice"
import companyReducer from "./slices/compnaySlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        nav: navReducer,
        company: companyReducer
    },
})
