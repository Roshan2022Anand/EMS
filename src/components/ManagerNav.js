"use client"
import React from 'react'
import { useSelector } from 'react-redux'
const ManagerNav = () => {
    const { navItme } = useSelector(state => state.nav);
    console.log(navItme);

    return (
        <section className='border w-[30%] flex flex-col h-full gap-10 pt-5'>
            <button>Home</button>
            <button>Employees</button>
            <button>Departments</button>
            <button>Leaves</button>
            <button>setting</button>
        </section>
    )
}

export default ManagerNav