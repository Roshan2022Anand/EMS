import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserData = createAsyncThunk('fetchUserData', async () => {
    console.log(localStorage.getItem('ems-email') + "from fetchUserData");
    
    const userRes = await axios.get('/api/userOperations', { params: { email: localStorage.getItem('ems-email') } })
    console.log(userRes.data);
    return userRes.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        id: null,
        companyId: null,
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
            console.log(action.payload + "from builder");

            state.userDetails = action.payload
        });
    }
})

export const { setEmailNId, setCompanyId } = userSlice.actions;
export default userSlice.reducer;