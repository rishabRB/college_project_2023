import { BookOpenIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function BasicLoading() {
  const navigate = useNavigate()  
  useEffect(()=>{
    setTimeout(()=>{
    navigate("/search")
    },1000)
  },[]) 
  return (
    <>
    <Navbar home={true} />
    <div className='h-[680px] bg-white flex flex-col justify-center items-center'>
        <BookOpenIcon className='h-24 w-24 animate-spin text-orange-400' />
        <h1 className='uppercase tracking-[3px] font-medium text-2xl mt-5'>Loading<span className='text-orange-400'>...</span></h1>
    </div>
    <Footer bgColor={true} />
    </>
  )
}

export default BasicLoading