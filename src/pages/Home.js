import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProgressBar from "@badrap/bar-of-progress";
import { publicRequest } from '../components/requestMethod';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks, clearBook } from '../features/bookMaintainSlice';




function Home() {


  const [name,setName] = useState("")
  const [author,setAuthor] = useState("")
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  



  const getBook=async(filterField)=>{
    try{
      const res = await publicRequest.get(`/books/getAllbook?${filterField}=${filterField === "name" ? name : author}`) 
      if(res.status === 200){
          dispatch(addBooks(res.data))
      } 
    }
    catch(err){
        console.log(err)
    }

  }



  const handleClick=()=>{
      dispatch(clearBook())
       if(name){
        getBook("name")
        navigate("/searchLoading")
       }
       else if(author){
        getBook("author")
        navigate("/searchLoading")
       }
       else{
           setError(true)
           setTimeout(()=>{
            setError(false)
           },1000)
       }
   }

  return (
    <>
      <Navbar home={true} />

      {/* Banner section */}
      <section className='h-[80vh] bg-no-repeat bg-fixed bg-cover items-center bg-[url("https://ucarecdn.com/84aa8c86-f3cc-44e7-97f8-c011b720ae73/pexelsphoto2041540.jpeg")] bg-image'>
        <div className="relative grid grid-cols-2 ">
          <div className="hidden sm:flex flex-col absolute space-y-4 left-8 top-52 w-1/2">
            {/* show content */}
            <h1 className="text-6xl text-white font-bold">
              " There is no friend as loyal as a book."
            </h1>
            <span className="text-white text-xl font-bold">
              -ERNEST HEMINGWAY
            </span>
          </div>

          <div className="absolute right-20 top-44 p-10 w-[300px] bg-white rounded flex flex-col justify-center m-auto items-center space-y-3 ">
            {error && (
              <div className="text-[10px] text-red-600">
                <span>Enter name </span>
              </div>
            )}
            <h2 className="uppercase">
              Find your <span className="text-orange-500 font-bold">book</span>
            </h2>
            <input
              className="bg-white-500 rounded border p-3 outline-none"
              type="text"
              name="bookName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Book Name"
            />
            <input
              className="bg-white rounded border p-3 outline-none"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author's name "
            />
            <button
              onClick={handleClick}
              className="p-3 rounded font-semibold bg-black text-sm text-white uppercase "
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home