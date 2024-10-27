"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setCompanyId, setEmailNId } from '@/redux/slices/userSlice';
const page = () => {
    const dispatch = useDispatch();
    const route = useRouter()
    //reference elements 
    const emailRef = useRef();
    const passwordRef = useRef();

    //state variables
    const [userExist, setuserExist] = useState(true);
    const [warningMsg, setwarningMsg] = useState("")

    const loginUser = async (e) => {
        e.preventDefault()
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        if (!email || !password) return;

        const res = await axios.post('/api/checkUser', { email, password });
        console.log(res.data);
        const { userExist } = res.data
        if (res.data.exists) {
            console.log(userExist.empType);

            setuserExist(true);
            dispatch(setEmailNId({ email, id: userExist._id }));
            localStorage.setItem('ems-email', email);
            dispatch(setCompanyId(userExist.company))
            route.push(`/${userExist.empType}/home`);
        }
        else {
            setwarningMsg(res.data.message);
            setuserExist(false);
        }
    }
    return (
        <main className='auth-section'>
            <h1>Login to EMS</h1>
            <form className='flex flex-col' onSubmit={loginUser}>
                <input type='email' placeholder='Email' ref={emailRef} required />
                <input type='password' placeholder='Password' ref={passwordRef} required />
                {!userExist && <p className='text-red-600'>{warningMsg}</p>}
                <button type='submit'>Login</button>
            </form>
            <p>New to EMS? <Link href="/signup">Signup</Link></p>
        </main>
    )
}

export default page