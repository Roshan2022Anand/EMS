"use client"
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const ManagerNav = () => {
    const { navItem } = useSelector(state => state.nav);
    useEffect(() => {
        const currBtn = document.getElementById(navItem);
        if (!currBtn) return;
        
        Object.assign(currBtn.style, {
            backgroundColor: 'rgba(0,0,0,0.2)',
        })

        return () => {
            Object.assign(currBtn.style, {
                backgroundColor: 'transparent',
            })
        }
    }, [navItem])

    


    return (
        <section className='border w-[30%] flex flex-col h-full gap-10 pt-5'>
            <button id='home-nav'><Link href='/manager/home'>Home</Link></button>
            <button id='employees-nav'><Link href='/manager/employees'>Employees</Link></button>
            <button id='department-nav'><Link href='/manager/departments'>Departments</Link></button>
            <button id='leaves-nav'><Link href='/manager/Leaves'>Leaves</Link></button>
            <button id='setting-nav'><Link href='/manager/setting'>setting</Link></button>
        </section>
    )
}

export default ManagerNav