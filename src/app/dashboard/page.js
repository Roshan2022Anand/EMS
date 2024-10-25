"use client"
import React, { useRef, useState } from 'react'
import styles from "./dash.module.css"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
const page = () => {
  const route = useRouter();
  const { email, id } = useSelector(state => state.user);
  console.log(email);
  console.log(id);


  //All state variables
  const [pageCount, setpageCount] = useState(1);
  const [userProfile, setuserProfile] = useState();
  const [imgFile, setimgFile] = useState()
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

  //All employee reference elements
  const departmentRef = useRef();
  const roleRef = useRef();

  //function to get all the data from the form
  const getAllDataFromForm = () => {
    return {
      name: nameRef.current.value,
      age: ageRef.current.value,
      dob: dobRef.current.value,
      phone: phoneRef.current.value,
      empType: empTypeRef.current.value,
      companyName: companyNameRef.current?.value,
      companyPassword: passwordRef.current.value,
      companyConfirmPassword: confirmPasswordRef.current.value,
      department: departmentRef.current.value,
      role: roleRef.current.value,
    }
  }

  //function to submit general details
  const submitForm = async (e) => {
    e.preventDefault();
    if (empTypeRef.current.value === "null") alert("Please select Employee Type")
    else setpageCount(2)
  }

  //function to submit manager details
  const submitManagerForm = async (e) => {
    e.preventDefault();
    const { name, age, dob, phone, empType, companyName, companyPassword, companyConfirmPassword, } = getAllDataFromForm();// line 27
    if (companyPassword !== companyConfirmPassword) {
      alert("Passwords do not match")
      return
    }

    //Api  to create a new company
    const companyRes = await axios.post("/api/company", { companyName, companyPassword, id });
    const companyId = companyRes.data.id;

    //Api to update the managers details
    const managerRes = await axios.put("/api/userOperations", { email, name, age, dob, phone, empType, companyId, imgFile });
    console.log(managerRes.data);
    route.push('/manager-home')
  }

  //function to submit employee details
  const submitEmployeeForm = async (e) => {
    e.preventDefault();
    const { name, age, dob, phone, empType, companyName, companyPassword, department, role } = getAllDataFromForm();
    if (department === "null" || role === "null") {
      alert("Please select Department and Role")
      return
    }

    //Api to chekck if the company exists
    // const companyRes =
    route.push('/employee-home')
  }

  //function to set the image
  const setImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setimgFile(file);
      setuserProfile(URL.createObjectURL(file));
    }
  }
  console.log(userProfile);
  console.log(imgFile);


  return (
    <main className={styles.main}>
      {/* from for general details */}
      {pageCount == 1 &&
        <form onSubmit={submitForm}>
          <section className='h-1/4'>
            <label htmlFor='profile' className=''>
              <img src={userProfile} alt='Set Profile' className='border rounded-full h-full w-1/2 mx-auto text-center content-center object-center' />
            </label>
            <input type='file' id='profile' accept='image/*' onChange={setImage} className='hidden' />
          </section>
          <input type="text" placeholder="Name" required ref={nameRef} />
          <input type="number" placeholder="Age" required ref={ageRef} />
          <div>
            <label htmlFor='dob'>DOB:</label>
            <input type="date" id='dob' placeholder="DOB" required ref={dobRef} />
          </div>
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

