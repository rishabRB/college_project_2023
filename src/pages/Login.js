import { UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../features/apicall';
import ProgressBar from "@badrap/bar-of-progress";


function Login() {

  const progress = new ProgressBar({
    size:4,
    color:"#FE595E",
    delay:100
  })
  useEffect(()=>{
  progress.start()
  setTimeout(() => {
    progress.finish();
  },2000); 
  })

  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const {error}=useSelector((state)=>state.adminLogin)
  const onSubmit = data => {
    userLogin(data)
  }

  const userLogin=(data) =>{
    // progress.start()
    LoginUser(dispatch,data) 
    // progress.start()
    navigate('/loginLoading')
  }
  
  return (
    <>
    <Navbar home={true}/>
    <div className='h-[80vh]  relative bg-no-repeat bg-fixed bg-cover items-center bg-[url("https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800")] bg-image'>
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
                 type="submit"
                 className='bg-black text-white px-5 py-3 w-[100px] uppercase font-bold rounded-full'
                //  onClick={userLogin}
                 />
            </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login