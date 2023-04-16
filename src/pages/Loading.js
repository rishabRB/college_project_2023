import { BookOpenIcon } from '@heroicons/react/24/solid'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Loading() {
  const navigate = useNavigate()  
  useEffect(()=>{
    setTimeout(()=>{
        navigate("/home")
    },1000)
  },[])  
  return (
    <>
    <Navbar home={true} />
    <div className='h-[680px] xl:h-screen  w-screen bg-white items-center font-mono justify-center flex'>
        <div className='flex items-center justify-center flex-col'>
          <BookOpenIcon  className='h-40 w-40 animate-bounce text-orange-400 m-3'/>
          <h1 className='uppercase text-3xl font-bold'>Welcome to <spna className="text-orange-400">LMS</spna></h1>
        </div>
    </div>
    </>
  )
}

export default Loading