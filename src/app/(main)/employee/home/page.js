"use client"
import Loader from '@/components/Loader';
import { updateDetails, updateUserData } from '@/redux/slices/userSlice';
import { Check, Pencil } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userDetails);

  const [editableCol, seteditableCol] = useState("");

  const nameRef = useRef();
  const ageRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    if (!editableCol) return;

    const editInput = document.getElementById(editableCol);
    editInput.disabled = false;

    return () => {
      editInput.disabled = true;
    }
  }, [editableCol])

  const saveEdits = (col) => {
    const editedValue = document.getElementById(col).value;
    dispatch(updateDetails({ col, value: editedValue }));
    seteditableCol('');
  }

  useEffect(() => {
    console.log("mounted");
    
    return () => {
      console.log("unmounted");
      
      dispatch(updateUserData())
    }
  }, [])
  


  if (!user) return <Loader />
  return (
    <main className='w-full'>
      <header className='text-center my-10'>home employee</header>
      <section className="w-2/3 border-2  mx-auto rounded-lg p-1">
        {/* Profile Header */}
        <header className="flex justify-around items-center mb-6">
          <img
            src={user.pic || "/default-pic.jpg"} // Default image
            alt={`${user.name}'s Profile Picture`}
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-800 mt-4">{user.company}</h1>
            <p className="text-sm text-gray-500">{user.employee?.role || "N/A"}</p>
          </div>
        </header>

        {/* Profile Details */}
        <article>

          <figure>
            <p className='opacity-80'>Name :</p>
            <div className='flex'>
              <input type="text" id='name' ref={nameRef} defaultValue={user.name} disabled className='editInput' />
              {editableCol === "name" ? <Check onClick={() => {
                saveEdits('name')
              }} /> : <Pencil onClick={() => { seteditableCol('name') }} />}
            </div>
          </figure>

          <figure>
            <p className='opacity-80'>Age :</p>
            <div className='flex'>
              <input type="number" id='age' ref={ageRef} defaultValue={user.age} disabled className='editInput' />
              {editableCol === "age" ? <Check onClick={() => {
                saveEdits('age')
              }} /> : <Pencil onClick={() => { seteditableCol('age') }} />}
            </div>
          </figure>

          <figure>
            <p className='opacity-80'>Phone no :</p>
            <div className='flex'>
              <input type="number" id='phone-no' ref={phoneRef} defaultValue={user.age} disabled className='editInput' />
              {editableCol === "phone-no" ? <Check onClick={() => {
                saveEdits('number')
              }} /> : <Pencil onClick={() => { seteditableCol('phone-no') }} />}
            </div>
          </figure>

        </article>

      </section>
    </main>
  )
}

export default page




//   dob: Date,
//   phone: Number,
