import { BookOpenIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function BasicLoading() {

  return (
    <>
    <Navbar home={true} />
    <div className='h-[680px] xl:h-screen bg-white flex flex-col justify-center items-center'>
        <BookOpenIcon className='h-24 w-24 animate-bounce  text-orange-400' />
    </div>
    <Footer bgColor={true} />
    </>
  )
}

export default BasicLoading