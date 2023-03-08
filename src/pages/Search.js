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
    <section className='h-[665px] xl:h-screen flex flex-col items-center justify-center bg-white'>
    <div className='flex w-full px-10  pb-5'>
    <h1 className='text-orange-400 text-lg uppercase font-bold font-Ubuntu'>All available books</h1>
    </div>
    <div className=' bg-[url("https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800")] bg-cover bg-image bg-no-repeat'> 
    <div className='h-[75vh] xl:h-[90vh] w-[100%]  flex flex-col overflow-scroll  scrollbar scrollbar-thumb-[#EA8359]  items-center space-y-5 justify-between'>
    {bookData ? bookData?.map((book,index)=><ShowBook key={index} book={book}/>) : <ErrorPage error="No books available" /> }
    </div>
    </div> 
    </section>
 
    <Footer bgColor={true} />
    </>
  )
}

export default Search