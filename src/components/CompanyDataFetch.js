"use client"
import { fetchCompanyData } from '@/redux/slices/compnaySlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const CompanyDataFetch = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector(state => state.user);
  
  useEffect(() => {
    if (userDetails) dispatch(fetchCompanyData(userDetails.company))
  }, [userDetails])

  return null     
}

export default CompanyDataFetch