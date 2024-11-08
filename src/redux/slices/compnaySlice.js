import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch company data from the server
export const fetchCompanyData = createAsyncThunk('fetchCompanyData', async (id) => {
    const res = await axios.get("/api/company", { params: { id } })
    const company = res.data.companyData
    const empRes = await axios.get("/api/employees", { params: { empArr: JSON.stringify(company.employees) } })

    return { company, employees: empRes.data.allEmp }
})

// Update all employees data
export const updateAllEmpData = createAsyncThunk("updateAllEmpData", async (_, { getState }) => {
    const state = getState();
    const { updatedEmp } = state.company;
    updatedEmp.map(async (emp) => {
        const res = await axios.put("/api/employees", { emp })
    })
})

const companySlice = createSlice({
    name: 'company',
    initialState: {
        companyData: null,
        departments:[],
        allEmployees: [],
        updatedEmp: [],
    },
    reducers: {
        updateEmpRole: (state, action) => {
            const { index, role, department } = action.payload;
            if (role != "null") state.allEmployees[index].employee.role = role;
            if (department != "null") state.allEmployees[index].employee.department = department;
            let isUpdated = false;
            state.updatedEmp.map((emp, i) => {
                if (emp._id === state.allEmployees[index]._id) {
                    isUpdated = true;
                    state.updatedEmp[i] = state.allEmployees[index]
                }
            })
            if (!isUpdated) state.updatedEmp.push(state.allEmployees[index])
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCompanyData.fulfilled, (state, action) => {
                const { company, employees } = action.payload
                state.companyData = company
                state.allEmployees = employees
            })
    }
})

export const { updateEmpRole } = companySlice.actions;
export default companySlice.reducer;