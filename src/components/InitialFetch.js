"use client"
import React, { useEffect } from 'react'
import { fetchUserData } from '@/redux/slices/userSlice';
import { useDispatch} from 'react-redux'

const InitialFetch = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserData());
    }, [])
    return null
}

export default InitialFetch
