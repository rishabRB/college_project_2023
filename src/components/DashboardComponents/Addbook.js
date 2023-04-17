import { PlusIcon } from '@heroicons/react/24/solid'
import React,{useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import { publicRequest } from '../requestMethod'
import {BookOpenIcon,FaceSmileIcon} from '@heroicons/react/24/solid'



function Addbook() {
  const [isloading,setIsLoading] = useState(false)
  const [bookadded  ,setbookAdded] = useState(false)
  const [alreadyAdded,setAlredyAdded] = useState(false)
  const { register, handleSubmit,reset, watch, formState: { errors } } = useForm();
  const onSubmit=async(data)=>{
    addBookData(data)
  }
  
  const addBookData=async(data)=>{
      setIsLoading(true)
      try{
         const res = await publicRequest.post("/books/addbooks",data)
         if(res.status === 200){
          setIsLoading(false)
          setbookAdded(true)
          resetData()
         } 
      }
      catch(err){
        if(err.response.status === 400) {
          setIsLoading(false)
          setbookAdded(false)
        }
      }

  }

  const resetData=()=>{
    setTimeout(()=>{
      setbookAdded(false)
      reset()
    },2000)
  }

  useEffect(()=>{
    if(watch("book_id").length === 5){
      getBook()
    }
    if(watch("book_id").length < 5){
      setAlredyAdded(false)
    }
  },[watch("book_id")])


  const getBook=async()=>{
    try{
      const res = await publicRequest.get(`/books/getbook?book_id=${watch("book_id")}`)
      if(res.status === 200){
        setAlredyAdded(true)
        ResetData()
      }
    }
    catch(err){
        console.log(err)
    }

  }

  const ResetData=()=>{
    setTimeout(()=>{
      reset()
    },1000)
  }


  // regular expression for only numbers 
  const onlyNumbers = /^\d+$/;


  return (
    <>
    <div className='flex flex-col w-full h-full sm:h-[86vh] font-mono'>
    <div className='p-5 m-5 border-2 border-gray-200 flex space-x-2 items-center justify-center'>
      <PlusIcon className='h-8 w-8 text-orange-500' />
      <h1 className='headingText'>Add book</h1>
    </div>
    {
    !isloading ? 
    <div className='w-full h-full items-center justify-center'>
       { !bookadded ?
        <div className='px-5 w-full flex flex-col sm:flex-row justify-around items-center space-x-4 space-y-4'>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex sm:w-1/2 justify-start flex-col space-y-4'>
        <h2 className='uppercase font-medium'>Enter the following details</h2>
        <input 
            className='issueButton'
            placeholder='Book id'
            {...register("book_id", { required:true,minLength:5,pattern:onlyNumbers})}
            maxLength={5}
            aria-invalid={errors.book_id ? "true" : "false"} 
            />
            {errors.book_id && errors.book_id.type === "pattern" && (
            <span className='text-red-400 px-2 text-[10px] text-start'>Please enter only number</span>
            )}
            {errors.book_id?.type === 'required' && <span className='text-red-400 px-2 text-[10px] text-start' role="alert">Book id is required</span>}
            {errors.book_id && errors.book_id.type === "minLength" && (
            <span className='text-red-400 px-2 text-[10px] text-start'>Book id muct be 5 digit</span>
            )}

            <input
            {...register('book_name',{required:true})}
             placeholder='Book Name'
             className='issueButton'
            aria-invalid={errors.student_name ? "true" : "false"} 
            />
            {errors.book_name?.type === 'required' && <span className='text-red-400 px-2 text-[10px] text-start' role="alert">Book name is required</span>}

            <input
            {...register('author_name',{required:true})}
             placeholder='Author Name'
             className='issueButton'
             aria-invalid={errors.author_name ? "true" : "false"} 
            />
            {errors.author_name?.type === 'required' && <span className='text-red-400 px-2 text-[10px] text-start' role="alert">Author name is required</span>}

            <input
            {...register('description',{required:true})}
            type="text"
             placeholder='Description'
             className='issueButton'
             aria-invalid={errors.total_number_book ? "true" : "false"} 
            />
            {errors.totalBooks?.type === 'required' && <span className='text-red-400 px-2 text-[10px] text-start' role="alert">Book description is required</span>}


            <input
            {...register('totalBooks',{required:true})}
             placeholder='Total Number of books'
             className='issueButton'
            aria-invalid={errors.total_number_book ? "true" : "false"} 
            />
            {errors.totalBooks?.type === 'required' && <span className='text-red-400 px-2 text-[10px] text-start' role="alert">Total number of book is required</span>}

           
            <input
            {...register('image_url')}
             placeholder='Book Image (url)'
             className='issueButton'
             />

             <input
             type="submit"
             disabled={alreadyAdded}
              className='px-5 py-3 w-full sm:w-[50%] disabled:bg-black/30 disabled:cursor-not-allowed bg-black text-white rounded-2xl'
              />
        </form>
        {/* preview section */}
        <div className='hidden md:flex w-full sm:w-1/3 h-[400px] items-center justify-center border p-5'>
            { watch("book_id")
              ?
            <div className='flex w-full flex-col  items-center justify-center space-y-4'>
               <span className='uppercase'>Book preview</span>
                { watch("image_url") ? <img className='w-[180px] h-[180px] ' src={watch("image_url")} alt="" /> : <div className='w-[180px] h-[180px] border flex justify-center items-center'><p className='uppercasae text-red-400 rotate-[-1500deg]'>NO Image</p></div>}
               <div className='flex flex-col items-start space-y-1'>
                  {watch("book_id") && <h2 className='text-sm uppercase font-medium'>Book id : {watch("book_id")}</h2>}
                  {watch("book_name") && <h2 className='text-sm uppercase font-medium'>Name : {watch("book_name")} </h2>}
                  {watch("author_name") && <h2 className='text-sm uppercase font-medium'>Author : {watch("author_name")} </h2>}
               </div>
               {alreadyAdded && <h2 className='text-red-400 uppercase'>Book Id already exits</h2>}
            </div >
            :
            <div className="flex w-full flex-col  items-center justify-center">
                <span className='uppercase'>Book preview</span>
                <p className='text-red-300 uppercase text-[10px]'>Enter book details</p>
            </div>
             } 
        </div>
        </div>
        :
        <div className='w-full flex items-center justify-center'>
        <div className='border flex flex-col justify-center bg-orange-100/90 items-center w-[500px] h-[200px] p-10'>
            <FaceSmileIcon className='h-10 w-10 text-orange-400' />
            <h1 className='uppercase flex text-green-500'>Thank you for helping public.</h1>
        </div>
        </div>
      }
    </div>
    :
    <div className='w-full h-[400px] flex justify-center items-center'>
    <BookOpenIcon className='h-10 w-10 animate-bounce text-orange-400'/>
    </div>
    }
    </div>
    </>
  )
}

export default Addbook