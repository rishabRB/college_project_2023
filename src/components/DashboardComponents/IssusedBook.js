import { ChartBarIcon } from '@heroicons/react/24/solid'
import React from 'react'

function IssusedBook() {
  return (
    <>
    <div className='flex flex-col h-[86vh] '>
    <div className='p-5 m-5 border-2 border-gray-200 flex space-x-2 items-center justify-center'>
      <ChartBarIcon className='h-8 w-8 text-orange-500' />
      <h1 className='headingText'>Issued book</h1>
    </div>
    <div className='px-5 w-full flex flex-col sm:flex-row justify-around items-center space-x-4 space-y-4'>
        
    </div>
    </div>
    </>
  )
}

export default IssusedBook