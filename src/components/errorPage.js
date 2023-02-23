import React from 'react'

function ErrorPage ({error}) {
  return (
    <div className='w-screen flex justify-center'>
    <div className='w-[80%] p-10 bg-white my-10 '>
        <h1 className='text-red-400 text-xl font-medium uppercase'>{error}</h1>
    </div>
    </div>
  )
}

export default ErrorPage