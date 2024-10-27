import React from 'react'
import { useSelector } from 'react-redux'

const EmployeeNav = () => {
  const { userDetails } = useSelector(state => state.user);
  
  return (
    <div>EmployeeNav</div>
  )
}

export default EmployeeNav