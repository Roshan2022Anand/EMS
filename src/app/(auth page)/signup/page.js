"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { hashSync } from 'bcryptjs';
import { useRouter } from 'next/navigation';
const page = () => {
    const route = useRouter()
    //reference elements 
    const emailRef = useRef();
    const passwordRef = useRef();

    //state variables
    const [userExist, setuserExist] = useState(false);

    const signUpUser = async (e) => {
        e.preventDefault()
        let email = emailRef.current.value;
        let password = hashSync(passwordRef.current.value, 10);
        const res = await axios.post('/api/addNewUser', { email, password })
        if (res.data.exists) setuserExist(true);
        else {
            setuserExist(false);
            route.push("/dashboard")
        }
    }
    return (
        <main className='auth-section'>
            <h1>Signup to EMS</h1>
            <form className='flex flex-col'>
                <input type='email' placeholder='Email' ref={emailRef} />
                <input type='password' placeholder='Password' ref={passwordRef} />
                <button type='submit' onClick={signUpUser}>Signup</button>
                {userExist && <p className='text-red-600'>User already exist</p>}
            </form>
            <p>Account already exist ? <Link href="/login">Login</Link></p>
        </main>
    )
}

export default page