import React from 'react'

function ShowBook({book}) {
  
  return (
    <div className='w-[80%] md:w-[90%] sm:h-[300px] justify-between bg-white hover:scale-105 transition my-5 duration-150 ease-in-out flex flex-col sm:flex-row rounded-lg shadow-lg '>
        {/* book image */}
       <div className='m-3 sm:m-0 md:h-[300px] md:w-[40%]'>
            <img 
            className="w-full h-[400px] sm:w-full sm:h-full "
            src={book.image} 
            alt="" />
        </div>
        {/* book details */}
        <div className='font-Ubuntu flex flex-col items-start p-10 text-start space-y-5'>
            <div>
            <h2 className='uppercase font-BebasNeue font-medium text-[#344055] text-2xl md:text-4xl'>{book.name}</h2>
            <h2 className='font-ubuntu text-xl uppercase text-gray-400'>{book.author}</h2>
            <p className='text-gray-600'>{book.description}</p>
            </div>
            <div className=''>
            <button className='uppercase p-2 bg-green-400'>available</button>
            <button className='uppercase p-2 bg-red-400'>Not available</button>
          </div>  
        </div>

    </div>
  )
}

export default ShowBook