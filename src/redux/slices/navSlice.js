import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        navItem: null
    },
    reducers: {
        setNav: (state, action) => {
            state.navItem = action.payload;
        }
    }
})

export const { setNav } = navSlice.actions;
export default navSlice.reducer;