import React from 'react'
import ErrorPage from '../components/errorPage'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ShowBook from '../components/ShowBook'
import bookData from '../utils/bookData'

function Search() {
  const handleClick=()=>{
      
  }
  return (
    <>
    <Navbar home={true} searchBar={true}/>
    <section className='h-[90vh] flex flex-col items-center justify-center bg-white'>
    <div className='flex w-full justify-center items-center'>
    <h1 className='text-orange-400 py-5 text-lg uppercase font-bold font-Ubuntu'>All available books</h1>
    </div>
    <div className='h-[75vh] xl:h-[90vh] w-[100%]  flex flex-col overflow-scroll  scrollbar scrollbar-thumb-[#EA8359]  items-center space-y-5 justify-between'>
    {bookData ? bookData?.map((book,index)=><ShowBook key={index} book={book}/>) : <ErrorPage error="No books available" /> }
    </div>
    </section>
    <Footer />
    </>
  )
}

export default Search