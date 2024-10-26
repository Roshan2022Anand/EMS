"use client"
import { fetchUserData } from '@/redux/slices/userSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector(state => state.user);
  console.log(userDetails);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [])


  return (
    <main className='grow border'>
      <h1>Manager Home</h1>
      <p>Welcome {userDetails?.currUser.name}</p>
    </main>
  )
}

export default page