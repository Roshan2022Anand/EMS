import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        navItme: null
    },
    reducers: {
        setNav: (state, action) => {
            state.navItme = action.payload;
        }
    }
})

export const { setNav } = navSlice.actions;
export default navSlice.reducer;