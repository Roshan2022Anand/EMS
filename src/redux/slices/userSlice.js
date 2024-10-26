import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        id: null,
        companyId: null,
    },
    reducers: {
        setEmailNId: (state, action) => {
            const { email, id } = action.payload;
            state.email = email;
            state.id = id;
        },
        setCompanyId: (state, action) => {
            state.companyId = action.payload;
        }
    }
})

export const { setEmailNId, setCompanyId } = userSlice.actions;
export default userSlice.reducer;