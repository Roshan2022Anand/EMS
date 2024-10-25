import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        id: null,
    },
    reducer: {
        setEmailNId: (state, action) => {
            const { email, id } = action.payload;
            state.email = email;
            state.id = id;
        }
    }
})

export const { setEmailNId } = userSlice.actions;
export default userSlice.reducer;