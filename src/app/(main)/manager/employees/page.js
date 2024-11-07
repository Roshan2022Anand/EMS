"use client"
import Loader from '@/components/Loader';
import { setNav } from '@/redux/slices/navSlice';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "@/app/(main)/main.module.css";
import Salary from '@/components/emp-actions/Salary';
import ViewEmp from '@/components/emp-actions/ViewEmp';
import EditEmp from '@/components/emp-actions/EditEmp';
import { updateAllEmpData } from '@/redux/slices/compnaySlice';
const page = () => {

  //to set the curretn page nav
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNav('employees-nav'))
  }, [dispatch])
 
  const { userDetails } = useSelector(state => state.user)
  const { allEmployees } = useSelector(state => state.company)

  // update all the employees details when cleaned up
  useEffect(() => {
    return () => {
      dispatch(updateAllEmpData())
    }
  }, [])

  const [basicDetails, setbasicDetails] = useState(null);
  const [salaryNLeave, setsalaryNLeave] = useState(null);
  const [editSection, seteditSection] = useState(null);

  if (!userDetails || !allEmployees) return <Loader />

  return (
    <main >
      <header className='text-center '>Manage employees</header>

      <input type='text' placeholder='Search employees' className='bg-transparent border-2  border-white rounded-xl px-2 float-right mr-2 mb-2' />

      <article className={styles.tableContainer}>
        <header>
          <span className='w-[8%]'>Sr.No</span>
          <span className='w-[12%]'>Img</span>
          <span className='w-[12%]'>Name</span>
          <span className='w-[12%]'>Department</span>
          <span className='w-[16%]'>Role</span>
          <span className='w-[40%]'>Action</span>
        </header>

        {allEmployees?.map((emp, i) => (
          <section key={emp._id} className='my-10'>
            <span className='w-[8%]'>{i + 1}</span>
            <figure className='w-[12%]'>
              <img src={emp.pic} alt={emp.name} className={styles.image} />
            </figure>
            <p className='w-[12%]'>{emp.name}</p>
            <p className='w-[12%]'>{emp.employee.department}</p>
            <p className='w-[16%]'>{emp.employee.role}</p>
            <nav>
              <button onClick={() => { setbasicDetails(<ViewEmp emp={emp} setbasicDetails={setbasicDetails}/>) }}>View</button>
              <button onClick={() => { seteditSection(<EditEmp index={i} seteditSection={seteditSection}/>) }}>Edit</button>
              <button onClick={() => { setsalaryNLeave(<Salary index={i} setsalaryNLeave={setsalaryNLeave}/>) }}>Salary & leave</button>
            </nav>
          </section>
        ))}
      </article>
      {basicDetails}
      {editSection}
      {salaryNLeave}
    </main>
  )
}

export default page
