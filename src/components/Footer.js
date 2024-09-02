import { BookOpenIcon } from '@heroicons/react/24/solid'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col bg-white p-5 pt-10'>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 place-items-start sm:place-items-center mb-5 font-Ubuntu '>

        {/* Privacy policy */}
        <div className='flex flex-col items-start text-sm sm:text-base'>
          <h1 className='text-orange-400 font-bold'>PRIVACY POLICY</h1>
          <span>Cookie policy</span>
          <span>How it works</span>
          <span>Security policy</span>
        </div>

        {/* social links */}
        <div className='flex flex-col items-start text-sm sm:text-base'>
          <h1 className='text-orange-400 font-bold '>COMMUNITY</h1>
          <div className='footerButton flex items-center space-x-2'>
            <FaTwitter className='text-orange-400' />
            <span>Twitter</span>
          </div>
          <div className='footerButton flex items-center space-x-2'>
            <FaFacebook className='text-orange-400' />
            <span>Facebook</span>
          </div>
          <div className='footerButton flex items-center space-x-2'>
            <FaInstagram className='text-orange-400'/>
            <span>Instagram</span>
          </div>
        </div>
        
        {/* contact */}
        <div className='flex flex-col items-start text-sm sm:text-base'>
          <h1 className='text-orange-400 font-bold'>CONTACT</h1>
          <span>Meet the staff</span>
          <span>libary@college.com</span>
          <span>+91 88888888</span>
        </div>

        {/* about */}
        <div className='flex flex-col items-start text-sm sm:text-base'>
          <h1 className='text-orange-400 font-bold'>ABOUT</h1>
          <span>About us</span>
          <span>Join our team</span>
          <span>Gallery</span>
        </div>
      </div>
      <hr />
       <div className='flex flex-col w-full items-center mt-5 justify-center'>
       <div className='flex w-full items-center justify-center m-5'>
        <h1 className='font-mono text-sm sm:text-lg tracking-[2px] sm:tracking-[10px] font-extrabold text-center'>LIBRARY<span className='text-orange-400'>MANAGEMENT</span>SYSTEM</h1>
        </div>
        <div className='flex flex-col w-full items-center text-xs sm:text-sm'>
        <BookOpenIcon className='h-6 sm:h-8 w-6 sm:w-8 text-orange-400'/>
        <h1 className='text-center'>Developed@ by A-group | All 	&#169; copyright is preserved@2023</h1>
      </div>
       </div>
    </div>
  )
}

export default Footer
