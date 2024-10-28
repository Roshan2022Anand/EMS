"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const EmployeeNav = () => {
  const { navItme } = useSelector(state => state.nav);

  return (
    <div>EmployeeNav</div>
  )
}

export default EmployeeNav