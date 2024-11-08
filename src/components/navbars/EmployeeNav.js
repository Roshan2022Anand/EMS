"use client"
import { ArrowBigLeft, Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive';
const ManagerNav = () => {
  //media query from react-responsive
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  // Get the current nav item from the redux store
  const { navItem } = useSelector(state => state.nav);

  const [navState, setnavState] = useState(false);


  // Highlight the current nav item
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
    <>
      <button
        className='absolute top-0'
        onClick={() => { setnavState(true) }}><Menu /></button>
      <section className='nav-bar' style={{
        transform: navState || isDesktop ? 'translateX(0)' : 'translateX(-100%)',
      }}>
        <button className='absolute top-1 right-1 lg:hidden' onClick={() => { setnavState(false) }}><ArrowBigLeft /></button>
        <button id='home-nav'><Link href='/employee/home'>Home</Link></button>
        <button id='leaves-nav'><Link href='/employee/leave'>Leaves</Link></button>
        <button id='setting-nav'><Link href='/employee/setting'>setting</Link></button>
      </section>
    </>
  )
}

export default ManagerNav