"use client"
import Loader from '@/components/Loader'
import { setNav } from '@/redux/slices/navSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  //to set the curretn page nav
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNav('employees-nav'))
  }, [dispatch])
  
  const { userDetails } = useSelector(state => state.user)

  if (!userDetails) return <Loader />

  return (
    <div>page</div>
  )
}

export default page