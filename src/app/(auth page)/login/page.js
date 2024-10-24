"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/navigation';
const page = () => {
    const route = useRouter()
    //reference elements 
    const emailRef = useRef();
    const passwordRef = useRef();

    //state variables
    const [userExist, setuserExist] = useState(true);

    const loginUser = async (e) => {
        e.preventDefault()
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        if (!email || !password) return;

        const res = await axios.post('/api/checkUser', { email, password });
        console.log(res.data);
           if(res.data.exists){
               setuserExist(true);
               route.push("/homePg");
           } 
           else setuserExist(false);
    }
    return (
        <main className='auth-section'>
            <h1>Login to EMS</h1>
            <form className='flex flex-col'>
                <input type='email' placeholder='Email' ref={emailRef} required />
                <input type='password' placeholder='Password' ref={passwordRef} required />
                <button type='submit' onClick={loginUser}>Login</button>
                {!userExist && <p className='text-red-600'>Account not found</p>}
            </form>
            <p>New to EMS? <Link href="/signup">Signup</Link></p>
        </main>
    )
}

export default page