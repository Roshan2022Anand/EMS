"use client"
import Loader from '@/components/Loader';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const page = () => {

    const { userDetails } = useSelector(state => state.user);
    if (!userDetails) return <Loader />
    return (
        <main className='flex h-full'>
            <h1>Manager Home</h1>
            <p>Welcome {userDetails?.currUser.name}</p>
        </main>
    )
}

export default page