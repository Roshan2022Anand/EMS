"use client"
import React, { useRef, useState } from 'react'
import styles from "./dash.module.css"
const page = () => {

  //All state variables
  const [pageCount, setpageCount] = useState(1);

  //All general reference elements
  const nameRef = useRef();
  const ageRef = useRef();
  const dobRef = useRef();
  const phoneRef = useRef();
  const empTypeRef = useRef();

  //All manager reference elements
  const companyNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const companyAddressRef = useRef();

  //All employee reference elements
  const departmentRef = useRef();
  const roleRef = useRef();

  //function to submit general details
  const submitForm = (e) => {
    e.preventDefault();
    if (empTypeRef.current.value === "null") alert("Please select Employee Type")
    else setpageCount(2)
  }

  //function to submit manager details
  const submitManagerForm = (e) => {
    e.preventDefault();
    if (passwordRef !== confirmPasswordRef) {
      alert("Passwords do not match")
      return
    }
  }

  //function to submit employee details
  const submitEmployeeForm = (e) => { }

  return (
    <main className={styles.main}>
      {/* from for general details */}
      {pageCount == 1 &&
        <form onSubmit={submitForm}>
          <input type="text" placeholder="Name" required ref={nameRef} />
          <input type="number" placeholder="Age" required ref={ageRef} />
          <input type="date" placeholder="DOB" required ref={dobRef} />
          <input type="number" placeholder="Phone Number" required ref={phoneRef} />
          <select name="empType" id="empType" ref={empTypeRef}>
            <option value="null">Select</option>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
          </select>
          <button type="submit" className='border p-2'>Submit</button>
        </form>}

      {/* form for manager */}
      {(pageCount == 2 && empTypeRef.current.value === "manager") &&
        <form onSubmit={submitManagerForm}>
          <p>Create a Company</p>
          <input type='text' placeholder='Company Name' required ref={companyNameRef} />
          <input type='password' placeholder='Password' required ref={passwordRef} />
          <input type="password" placeholder='Confirm Password' required ref={confirmPasswordRef} />
          <input type='text' placeholder='Company Address' required ref={companyAddressRef} />
          <button type="submit" className='border p-2'>Submit</button>
        </form>}

      {/* form for employee */}
      {(pageCount == 2 && empTypeRef.current.value === "employee") &&
        <form onSubmit={submitEmployeeForm} >
          <p>Enter the details of your company</p>

          <input type='text' placeholder='Company Name' required ref={companyNameRef} />
          <input type='password' placeholder='Password' required ref={passwordRef} />

          {/* options for the department */}
          <select name="department" id="department" ref={departmentRef}>
            <option value="null">Select Department</option>
            <option value="engineering">Engineering</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="human_resources">Human Resources</option>
            <option value="finance">Finance</option>
            <option value="customer_support">Customer Support</option>
            <option value="product_management">Product Management</option>
            <option value="it_support">IT & Support</option>
            <option value="operations">Operations</option>
            <option value="research_development">Research & Development</option>
            <option value="legal">Legal</option>
            <option value="design">Design</option>
            <option value="quality_assurance">Quality Assurance</option>
          </select>

          {/* options for the role */}
          <select name="role" id="role" ref={roleRef}>
            <option value="null">Select Role</option>
            <option value="software_engineer">Software Engineer</option>
            <option value="project_manager">Project Manager</option>
            <option value="sales_executive">Sales Executive</option>
            <option value="marketing_specialist">Marketing Specialist</option>
            <option value="hr_manager">Human Resources Manager</option>
            <option value="financial_analyst">Financial Analyst</option>
            <option value="customer_support_rep">Customer Support Representative</option>
            <option value="product_manager">Product Manager</option>
            <option value="it_specialist">IT Specialist</option>
            <option value="operations_coordinator">Operations Coordinator</option>
            <option value="research_scientist">Research Scientist</option>
            <option value="legal_advisor">Legal Advisor</option>
            <option value="ux_ui_designer">UX/UI Designer</option>
            <option value="qa_engineer">Quality Assurance Engineer</option>
            <option value="data_analyst">Data Analyst</option>
            <option value="business_development_manager">Business Development Manager</option>
          </select>

          <button type="submit" className='border p-2'>Submit</button>
        </form>}

    </main>
  )
}

export default page

import mongoose from "mongoose";
//   status: String,
//   salaryPayout: [{
//     amount: Number,
//     date: Date,
//   }],
//   leaveList: [{
//     type: String,
//     startDate: Date,
//     endDate: Date,
//     status: String,
//   }],
// })

//   empType: {
//     type: String,
//     enum: ["employee", "manager"],
//   },
//   dob: Date,
//   pic: String,
//   phNum: Number,
//   employee: employeeSchema,
// });


