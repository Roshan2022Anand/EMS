import Loader from '@/components/Loader'
import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const { userDetails } = useSelector(state => state.user)

  if (!userDetails) return <Loader/>


  return (
    <div>page</div>
  )
}

export default page