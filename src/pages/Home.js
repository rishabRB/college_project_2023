import {PrinterIcon, TvIcon, UserIcon, WalletIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Carousel from '../components/carousel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {quotes} from '../utils/data'
// import {Cursor,useTypewriter} from 'react-simple-typewriter'

function Home() {
  return (
    <>
    <Navbar />

    {/* Banner section */}
    <section className='h-[600px] bg-no-repeat bg-fixed bg-cover items-center bg-[url("https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800")] bg-image'>
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
                    className='bg-white-500 rounded border p-3'
                    type="" 
                    name="" 
                    value=""
                    placeholder='Book Name'
                    />
                    <input
                    className='bg-white rounded border p-3'
                    type=""
                    value=""
                    placeholder="Author's name "
                    />
                    <button
                    className='p-3 rounded font-semibold bg-black text-sm text-white uppercase '
                    >Search</button>
              </div>
            </div>
    </section>
    {/* basic imformation section */}
    <section className='bg-white'>
        <div className='p-10 space-y-2'>
            <h1 className='text-black uppercase text-xl font-bold border-b-2 w-[210px] p-1 mb-5 border-orange-400'>Thinks you can do</h1>
            {/* imformation */}
            <div className="space-y-5">
                  <div className='grid sm:grid-cols-4 grid-cols-1  sm:space-x-2'>
                      <div className='flex items-center justify-center space-x-5 p-5 border m-1 hover:bg-gray-100 rounded-xl'>
                        <UserIcon className='h-10 w-10 text-orange-400'/>
                        <h2>Sit, read, and study, or watch or listen to media</h2>
                      </div>
                      <div className='flex items-center justify-center border space-x-5 p-5 m-1 hover:bg-gray-100 rounded-xl '>
                        <WalletIcon className='h-8 w-8 text-orange-400'/>
                        <h2>Browse the shelves for books or media</h2>
                      </div>   
                      <div className='flex items-center justify-center space-x-5 border p-5 m-1 hover:bg-gray-100 rounded-xl'>
                        <PrinterIcon className='h-8 w-8 text-orange-400'/>
                        <h2>Borrow print books</h2>
                      </div>   
                      <div className='flex items-center justify-center space-x-5 p-5 border m-1 hover:bg-gray-100 rounded-xl'>
                        <TvIcon className='h-8 w-8 text-orange-400'/>
                        <h2>Research topics that interest you</h2>
                      </div>
                      </div>
            </div>
        </div>
    </section>
    {/* Carousel section */}
    <section className='relative h-[600px] bg-no-repeat bg-fixed bg-cover items-center bg-[url("https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800")] bg-image'>
      <div className='absolute w-full flex m-auto p-10 items-center justify-center '>
      <Carousel quotes={quotes} />
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Home