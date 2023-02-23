import {FolderArrowDownIcon } from '@heroicons/react/24/solid'
import React from 'react'

function ReturnBook() {
  return (
    <>
    <div className='flex flex-col h-[86vh] font-mono'>
    <div className='p-5 m-5 border-2 border-gray-200 flex space-x-2 items-center justify-center'>
      <FolderArrowDownIcon className='h-8 w-8 text-orange-500' />
      <h1 className='headingText'>Return book</h1>
    </div>
    <div className='px-5 w-full flex flex-col sm:flex-row justify-around items-center space-x-4 space-y-4'>
        <form className='flex sm:w-1/2 justify-start flex-col space-y-4'>
        <h2 className='uppercase font-medium'>Enter the following details</h2>
            <input 
            className='issueButton'
            value=""
            placeholder='Book id'
            />
            <input
             placeholder='Student Name'
             value=""
             className='issueButton'
             />
            <input 
            className='issueButton'
            value=""
            placeholder='Registration number'
            />
            <input
             placeholder='Return date'
             value=""
             className='issueButton'
             />
             <input
             type="submit"
              className='px-5 py-3 w-full sm:w-[50%] bg-black text-white rounded-2xl'
              />
        </form>
    </div>
    </div>
    </>
  )
}

export default ReturnBook