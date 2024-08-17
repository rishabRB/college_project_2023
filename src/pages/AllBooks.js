import { useEffect, useState } from 'react'
import ErrorPage from '../components/errorPage'
import Navbar from '../components/Navbar'
import ShowBook from '../components/ShowBook'
import { publicRequest } from '../components/requestMethod'
import BasicLoading from './BasicLoading'
import { BookOpenIcon } from '@heroicons/react/24/solid'


function AllBooks() {



  const [allbookData,setAllBookdata]=useState([])


  const getBook=async()=>{
    try{
      const res = await publicRequest.get(`/books/getbookAllBooks`) 
      if(res.status === 200){
        setAllBookdata(res.data)
      } 
    }
    catch(err){
        console.log(err)
    }

  }

  useEffect(()=>{
        getBook()
  },[])



  return (
    <>
    <Navbar home={true} searchBar={true}/>
    <section className='min-h-[90vh] flex flex-col items-center justify-center bg-white'>
    <div className='flex w-full justify-center items-center'>
    <h1 className='text-orange-400 py-5 text-lg uppercase font-bold font-Ubuntu'>All available books</h1>
    </div>
    {allbookData.length > 0 ? 
    <div className='h-[75vh] xl:h-[90vh] w-[100%]  flex flex-col overflow-scroll  scrollbar scrollbar-thumb-[#EA8359]  items-center space-y-5 justify-between'>
    {allbookData ? allbookData?.map((book,index)=><ShowBook key={index} book={book}/>) : <ErrorPage error="No books available" /> }
    </div>
    :
    <div className='h-[680px] xl:h-screen bg-white flex flex-col justify-center items-center'>
    <BookOpenIcon className='h-24 w-24 animate-bounce  text-orange-400' />
    </div>
    }
    </section>
    </>
  )
}

export default AllBooks