import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch user data from the server
export const fetchUserData = createAsyncThunk('fetchUserData', async () => {
    const userRes = await axios.get('/api/userOperations', { params: { email: localStorage.getItem('ems-email') } })
    return userRes.data.currUser;
})

//update user data
export const updateUserData = createAsyncThunk('updateUserData', async (_, {getState}) => {
    const state = getState()
    let { userDetails, updated } = state.user;
    console.log(userDetails, updated);
    if (!updated) return;
    const res = await axios.patch('/api/userOperations',{ userDetails});
    console.log(res.data);
    updated = false;
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        id: null,
        userDetails: null,
        updated: false,
    },
    reducers: {
        setEmailNId: (state, action) => {
            const { email, id } = action.payload;
            state.email = email;
            state.id = id;
        },
        setCompanyId: (state, action) => {
            state.companyId = action.payload;
        },
        updateDetails: (state, action) => {
            const { col, value } = action.payload;
            state.userDetails[col] = value;
            state.updated = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.userDetails = action.payload
        });
    }
})

export const { setEmailNId, setCompanyId, updateDetails } = userSlice.actions;
export default userSlice.reducer;