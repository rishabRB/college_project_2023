import React, { useState,useEffect } from 'react'
import {BookOpenIcon } from '@heroicons/react/24/solid'
import { publicRequest } from './requestMethod'

function ShowIssuedBook({book}) {
  const [bookdata,setBookdata] = useState([]) //book data
  useEffect(()=>{
    fetchImage()
  },[])  

  const fetchImage =async()=>{
    try{
        const res = await publicRequest.get(`books/getbook?book_id=${book.book_id}`)
        if(res.status === 200) setBookdata(res.data)
      }catch(err){
        if(err.response.status === 400) console.log(err)
      }
  }
  return (
    <div className='w-full border  my-5 p-5'>
    {bookdata ?
    <div className='flex flex-col space-y-5  sm:space-y-0 items-center sm:grid sm:grid-cols-3'>
        {/* image section */}
        <div className=''>
        {bookdata.image !== null ? <img className='w-[180px] h-[180px] rounded-sm' src={bookdata.book_image} alt="" /> : <div className='w-[180px] h-[180px] border flex justify-center items-center'><p className='uppercasae text-red-400 rotate-[-1500deg]'>NO Image</p></div>}
        </div>
        {/* detail section */}
        <div className='p-1 flex flex-col justify-center items-start'>
              <h2 className='text-sm uppercase font-medium'>Book id : {bookdata.book_id}</h2>
              <h2 className='text-sm uppercase font-medium'>Name : {bookdata.name}</h2>
              <h2 className='text-sm uppercase font-medium'>Author : {bookdata.author}</h2>
        </div>
        {/* studen section */}
        <div className='p-1 flex flex-col justify-center items-start'>
              <h2 className='text-sm uppercase font-medium'>Student Name : {book.student_name}</h2>
              <h2 className='text-sm uppercase font-medium'>Registration Number : {book.registration_number}</h2>
              <h2 className='text-sm text-red-400 uppercase font-bold'>Return date : {book.return_date.slice(0,10)}</h2>
        </div>
    </div>
    :
    <div className='flex justify-center items-center'>
        <BookOpenIcon className='h-3 w-3 text-orange-200 animate-bounce' />
    </div>
    }
</div>
  )
}

export default ShowIssuedBook