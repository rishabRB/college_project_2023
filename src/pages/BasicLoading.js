import { BookOpenIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function BasicLoading() {

  return (
    <>
    <Navbar home={true} />
    <div className='h-[680px] xl:h-screen bg-white flex flex-col justify-center items-center'>
        <BookOpenIcon className='h-24 w-24 animate-bounce  text-orange-400' />
    </div>
    </>
  )
}

export default BasicLoading