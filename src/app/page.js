"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  const route = useRouter()
  return (
    <>
      <nav>
        <button className='border p-3 rounded-2xl' onClick={() => { route.push("/signup") }}>Signup</button>

        <button className='border p-3 rounded-2xl' onClick={() => { route.push("/dashboard") }}>Dashboard</button>
      </nav>
      <main></main>
    </>
  )
}

export default page