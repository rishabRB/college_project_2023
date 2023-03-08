import { UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import {login} from '../features/adminLoginSlice'



function Login() {

  const dispatch = useDispatch()
  const [error,seterror] = useState(true);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = data => {
    dispatch(login(data))
    navigate("/dashboard")
    }


  return (
    <>
    <Navbar home={true}/>
    <div className='h-[680px] xl:h-screen  relative bg-no-repeat bg-fixed bg-cover items-center bg-[url("https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800")] bg-image'>
        <div className='w-[400px] absolute right-12 top-32 h-[420px] py-5 px-10 bg-white rounded-xl'>
            {/* error section */}
            {error &&  <div className='text-[10px] text-red-600'>
                <span>Incorrect password/username</span>
            </div> }

            {/* default section */}
            <div className='flex items-center justify-center my-5'>
                <UserCircleIcon className='h-[60px] w-[60px]'/>
            </div>

            <div className='m-5'>
                <h1 className='text-2xl font-extrabold'>Log in</h1>
                <span className='text-[12px] text-gray-500'>Enter your credentials</span>
            </div>

            {/* form section */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-items-center space-y-5'>
                <input 
                 {...register('username')}
                 className='px-5 py-3 border-2 rounded outline-0'
                 placeholder='Username'
                 required={true}
                />
                <input 
                {...register('password')}
                className='px-5 py-3 border-2 rounded outline-0'
                placeholder='Password'
                type="password"
                required={true}
                 />
                 <input 
                 className='bg-black text-white px-5 py-3 w-[100px] uppercase font-bold rounded-full'
                 type="submit"
                 />
            </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login