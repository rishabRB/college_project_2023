import { UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Login() {
  const [error,seterror] = useState(true);
  const navigate = useNavigate()

  const handleSubmit=()=>{
     navigate("/dashboard")
  }

  return (
    <>
    <Navbar home={true}/>
    <div className='h-[715px] relative bg-no-repeat bg-fixed bg-cover items-center bg-[url("https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800")] bg-image'>
        <div className='w-[400px] absolute right-12 top-32 h-[420px] py-5 px-10 bg-white rounded-xl'>
            {/* error section */}
            {error &&  <div className='text-[10px] text-red-600'>
                <span>Incorrect password / username</span>
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
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-items-center space-y-5'>
                <input 
                 className='px-5 py-3 border-2 rounded outline-0'
                 value=""
                 placeholder='Username'
                />
                <input 
                className='px-5 py-3 border-2 rounded outline-0'
                value=""
                placeholder='Password'
                type="text"
                 />
                 <input 
                 className='bg-black text-white px-5 py-3 w-[100px] uppercase font-bold rounded-full'
                 type="submit"
                 />
            </form>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Login