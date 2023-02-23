import {PrinterIcon, TvIcon, UserIcon, WalletIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
// import Carousel from '../components/carousel'
// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import {quotes} from '../utils/data'

function Home() {
  const navigate = useNavigate()
  const handleClick=()=>{
       navigate("/loading")
   }

  return (
    <>
    <Navbar home={true}/>

    {/* Banner section */}
    <section className='h-[680px] bg-no-repeat bg-fixed bg-cover items-center bg-[url("https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800")] bg-image'>
    <div className='relative grid grid-cols-2'>
              <div className='hidden sm:flex flex-col absolute space-y-4 left-8 top-52 w-1/2'>
                {/* show content */}
                <h1 className='text-6xl text-white font-bold'>" There is no friend as loyal as a book."</h1>
                <span className='text-white text-xl font-bold'>-ERNEST HEMINGWAY</span>
              </div>

              <div className='absolute right-20 top-44 p-10 w-[300px] bg-white rounded flex flex-col justify-center m-auto items-center space-y-3 '>
                   <h2 className='uppercase'>Find your {" "}
                   <span
                   className='text-orange-500 font-bold'
                   >book</span>
                   </h2>
                    <input 
                    className='bg-white-500 rounded border p-3 outline-none'
                    type="" 
                    name="" 
                    value=""
                    placeholder='Book Name'
                    />
                    <input
                    className='bg-white rounded border p-3 outline-none'
                    type=""
                    value=""
                    placeholder="Author's name "
                    />
                    <button
                    onClick={handleClick}
                    className='p-3 rounded font-semibold bg-black text-sm text-white uppercase '
                    >Search</button>
              </div>
            </div>
    </section>
    <Footer />
    </>
  )
}

export default Home