import { BookOpenIcon } from '@heroicons/react/24/solid'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import React from 'react'

function Footer() {
  return (
    <div className='justify-between flex flex-col sticky bg-white p-5 pt-20'>
      <div className='grid grid-cols-2 lg:grid-cols-4 place-items-start sm:place-items-center mb-5 font-Ubuntu '>

        {/* Privacy policy */}
        <div className='flex flex-col items-start'>
          <h1 className='text-orange-400 font-bold'>PRIVACY POLICY</h1>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>

        {/* social links */}
        <div className='flex flex-col items-start'>
          <h1 className='text-orange-400 font-bold '>COMMUNITY</h1>
          <div className='footerButton'>
          <FaTwitter className='text-orange-400' />
          <span>Twitter</span>
          </div>
          <div className='footerButton'>
          <FaFacebook className='text-orange-400' />
          <span>Facebook</span>
          </div>
          <div className='footerButton'>
          <FaInstagram className='text-orange-400 '/>
          <span>Instagram</span>
          </div>
        </div>
        
        {/* contact */}
        <div className='flex flex-col items-start'>
          <h1 className='text-orange-400 font-bold'>CONTACT</h1>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>

        {/* about */}
        <div className='flex flex-col items-start '>
          <h1 className='text-orange-400 font-bold'>ABOUT</h1>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </div>
      <hr />
       <div className='flex flex-col w-full items-center mt-5 justify-center'>
       <div className='flex w-full items-center justify-center m-5'>
        <h1 className='font-mono text-lg sm:text-xl tracking-[10px] font-extrabold'>LIBRARY<span className='text-orange-400'>MANEGEMENT</span>SYSTEM</h1>
        </div>
        <div className='flex flex-col w-full items-center'>
        <BookOpenIcon className='h-8 w-8 text-orange-400'/>
        <h1 >Developed@ by A-group | All 	&#169; copyright is preserved@2023</h1>
      </div>
       </div>
    </div>
  )
}

export default Footer
