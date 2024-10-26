"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { hashSync } from 'bcryptjs';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setEmailNId } from '@/redux/slices/userSlice';
const page = () => {
    const dispatch = useDispatch();
    const route = useRouter()
    //reference elements 
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    //state variables
    const [userExist, setuserExist] = useState(false);
    const [eroorMsg, seteroorMsg] = useState("")


    const signUpUser = async (e) => {
        e.preventDefault()
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        let confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setuserExist(true);
            seteroorMsg("Password and confirm password should be same")
            return;
        }

        const res = await axios.post('/api/userOperations', { email, password: hashSync(passwordRef.current.value, 10) })
        const id = res.data.id;
        if (res.data.exists) {
            setuserExist(true);
            seteroorMsg(res.data.message);
        } else {
            setuserExist(false);
            dispatch(setEmailNId({ email, id }));
            localStorage.setItem('ems-email', email);
            route.push("/dashboard")
        }
    }
    return (
        <main className='auth-section'>
            <h1>Signup to EMS</h1>
            <form className='flex flex-col' onSubmit={signUpUser}>
                <input type='email' placeholder='Email' ref={emailRef} required />
                <input type='password' placeholder='Password' ref={passwordRef} required />
                <input type='password' placeholder='Confirm Password' ref={confirmPasswordRef} required />
                <button type='submit'>Signup</button>
                {userExist && <p className='text-red-600'>{eroorMsg}</p>}
            </form>
            <p>Account already exist ? <Link href="/login">Login</Link></p>
        </main>
    )
}

export default page