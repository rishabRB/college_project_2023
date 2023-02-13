import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Search() {
  return (
    <>
    <Navbar home={true}/>
    <section className='h-[88vh] w-full bg-white'>
        <div className='border h-[300px] w-[300px]'></div>
        <div className='border h-[300px] w-[300px]'></div>
    </section>
    <Footer />
    </>
  )
}

export default Search