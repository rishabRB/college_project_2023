import { ChartBarIcon } from '@heroicons/react/24/solid'
import React, { useEffect,useState } from 'react'
import ShowIssuedBook from '../ShowIssuedBook'
import {BookOpenIcon} from '@heroicons/react/24/solid'
import { publicRequest } from '../requestMethod'

function IssusedBook() {
  const [bookData,setBookData] = useState([])
  const [isLoading,setIsloading] = useState(false)
  useEffect(()=>{
    getbooks()  
  },[])

 

  const getbooks = async ()=>{
      setIsloading(true)
      try{
        const res = await publicRequest.get("/books/allBooks/")
        if(res.status === 200) {
          setIsloading(false)
          setBookData(res.data) 
        }
      }
      catch(err){
          if(err.response.status === 400) {
            setIsloading(false)
          }
         
      }
  }

  return (
    <>
    <div className='flex flex-col h-[86vh] font-mono'>
    <div className='p-5 m-5 border-2 border-gray-200 flex space-x-2 items-center justify-center'>
      <ChartBarIcon className='h-8 w-8 text-orange-500' />
      <h1 className='headingText'>Issued book</h1>
    </div>
    <div className='px-5 w-full flex flex-col overflow-y-scroll'>
      {isLoading ?
      <div className='w-full h-[400px] flex justify-center items-center'>
         <BookOpenIcon className='h-10 w-10 animate-bounce text-orange-400'/>
       </div>
         :
      <div>
      {bookData ? 
      <div>
        <div>
        <h2 className='uppercase font-bold text-black'>All Issued books ({bookData.length})</h2>
        </div>
        {bookData.map((book,index)=>(
          <ShowIssuedBook book={book} key={index} />
        ))} 
        </div>
        :
        <div className='text-center'>
        <h1 className='uppercase text-red-500'>No data found</h1>
        </div>
       }
      </div>
    }
    </div>
    </div>
    </>
  )
}

export default IssusedBook