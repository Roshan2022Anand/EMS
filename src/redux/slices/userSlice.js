import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserData = createAsyncThunk('fetchUserData', async () => {
    const userRes = await axios.get('/api/userOperations', { params: { email: localStorage.getItem('ems-email') } })
    return userRes.data.currUser;
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        id: null,
        userDetails: null
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.userDetails = action.payload
        });
    }
})

export const { setEmailNId, setCompanyId } = userSlice.actions;
export default userSlice.reducer;