import React from 'react'
import ErrorPage from '../components/errorPage'

import Navbar from '../components/Navbar'
import ShowBook from '../components/ShowBook'
import { useSelector } from 'react-redux'


function Search() {

  const bookData = useSelector((state)=>state.bookMaintain.bookData)
  return (
    <>
    <Navbar home={true} searchBar={true}/>
    <section className='min-h-[90vh] flex flex-col items-center justify-center bg-white'>
    <div className='flex w-full justify-center items-center'>
    <h1 className='text-orange-400 py-5 text-lg uppercase font-bold font-Ubuntu'>All available books</h1>
    </div>
    <div className='h-[75vh] xl:h-[90vh] w-[100%]  flex flex-col overflow-scroll  scrollbar scrollbar-thumb-[#EA8359]  items-center space-y-5 justify-between'>
    {bookData.length > 0 ? bookData?.map((book,index)=><ShowBook key={index} book={book}/>) : <ErrorPage error="No books available" /> }
    </div>
    </section>
    </>
  )
}

export default Search