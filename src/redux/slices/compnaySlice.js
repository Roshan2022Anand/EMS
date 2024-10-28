import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCompanyData = createAsyncThunk('fetchCompanyData', async (id) => {
    const res = await axios.get("/api/company", { params: { id } })
    console.log(res.data);
    return res.data.comapnyData
})

const companySlice = createSlice({
    name: 'company',
    initialState: {
        companyData: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCompanyData.fulfilled, (state, action) => {
            state.companyData = action.payload
        })
    }

})

export default companySlice.reducer;