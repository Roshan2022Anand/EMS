"use client"
import Loader from '@/components/Loader';
import { setNav } from '@/redux/slices/navSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {
    const dispatch = useDispatch();
    const { userDetails } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(setNav('home-nav'))
    }, [dispatch])

    if (!userDetails) return <Loader />
    return (
        <main className='flex h-full'>
            <h1>Manager Home</h1>
            <p>Welcome {userDetails?.name}</p>
        </main>
    )
}

export default page