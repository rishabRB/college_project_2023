import {ArrowLeftIcon, BookOpenIcon, FolderArrowDownIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import ShowUserBook from '../ShowUserBook';
import { publicRequest } from '../requestMethod';

function ReturnBook() {
  const [bookdata,setbookData] = useState([])
  const [showbook,setshowBook] = useState(false)
  const [bookLoading,setBookLoading] = useState(false)
  const [isloading,setIsLoading] = useState(false)
  const [studentError,setStudentError] = useState(false) // state for not finding book in database
  const [Studentdetail,setStudentDetail] = useState(null)
  const { register, handleSubmit, watch,reset,formState: { errors } } = useForm();
  const onSubmit=(data)=>{
    setshowBook(true)
    getUserBooks()
  }  

  useEffect(()=>{
    if(watch("registration_number").length === 11){
      getstudentDetails()
    }
    if(watch("registration_number").length < 11) {
      setStudentDetail(null)
      setStudentError(false)
    }
  },[watch("registration_number")])

  

  const getstudentDetails= async()=>{
      setBookLoading(true)
      try{
        const res = await publicRequest.get(`/user/getStudent?registration_number=${watch("registration_number")}`)
        if(res.status === 200){
          setStudentDetail(res.data)
          setBookLoading(false)
        }
      }
      catch(err){
        if(err.response.status === 400) setStudentError(true)
      }
  }


  const getUserBooks = async()=>{
    setIsLoading(true)
    try{
      const res = await publicRequest.get(`/books/issuedBook?registration_number=${(watch("registration_number"))}`)
      if(res.status === 200) {
        setbookData(res.data)
        setIsLoading(false)
      }

    }
    catch(errors){
        if(errors.response.status === 400){
        setIsLoading(false)
        setbookData(null) 
        setTimeout(()=>{
          GoBack()
        },1000)
      }
    }
  }
 
  // regular expression for only numbers 
  const onlyNumbers = /^\d+$/;
  
  const GoBack=()=>{
    setshowBook(false)
    reset()
  }



  
  return (
    <>
    <div className='flex flex-col h-[86vh] font-mono'>
    <div className='p-5 m-5 border-2 border-gray-200 flex space-x-2 items-center justify-center'>
      <FolderArrowDownIcon className='h-8 w-8 text-orange-500' />
      <h1 className='headingText'>Return book</h1>
    </div>
    <div className=''>
    {!showbook ?  
    <div className='px-10 py-5 w-full flex flex-col sm:flex-row justify-between items-center space-x-4 space-y-4'>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex sm:w-1/2 justify-start flex-col space-y-4'>
        <h2 className='uppercase text-start font-medium'>Enter Registration Number</h2>
           <input 
            {...register('registration_number',{pattern:onlyNumbers,required:true,minLength:11})}
            maxLength={11}
            className='issueButton'
            placeholder='Registration number'
            aria-invalid={errors.registration_number ? "true" : "false"} 
            />
            {studentError && <span className='text-red-400 px-2 text-[10px] text-start'>Enter correct registration number</span>}
            {errors.registration_number && errors.registration_number.type === "pattern" && (
            <span className='text-red-400 px-2 text-[10px] text-start'>Please enter only number</span>
            )}
            {errors.registration_number?.type === 'required' && <span className='text-red-400 px-2 text-[10px] text-start' role="alert">Registration number is required</span>}
            {errors.registration_number && errors.registration_number.type === "minLength" && (
            <span className='text-red-400 px-2 text-[10px] text-start'>Registration number muct be 11 digit</span>
            )}
             <input
              type="submit"
              disabled={bookLoading}
              className='px-5 py-3 w-full sm:w-[50%] disabled:bg-black/75 disabled:cursor-not-allowed bg-black text-white rounded-2xl'
              />
        </form>

        {/* student section  */}
        <div className='hidden sm:flex'>
         <div className='w-[400px] h-[200px] flex flex-col items-center justify-center border'>
          {
          !Studentdetail
          ?
          <div>
          {!watch("registration_number") ?
              <div>
              <span className={`uppercase text-xl`}>Student details</span>
               <h1 className='text-[10px] uppercase text-red-400'>Enter registration number </h1 >
              </div>
               :
              <div>
              {!studentError ? <BookOpenIcon className='h-8 w-8 animate-bounce text-orange-400' /> : <h1 className='text-red-400 uppercase'>No Detail found</h1>}
              </div>
            }
          </div>
          :
          <div className='flex flex-col items-start justify-center'>
              <h2 className='text-sm uppercase font-medium'>Student Name : {Studentdetail.student_name}</h2>
              <h2 className='text-sm uppercase font-medium'>Registration Number : {Studentdetail.registration_number}</h2>
          </div>
          }
          </div>
        </div>
    </div>

    :

    <div className='w-full p-10 '>
        {isloading ? 
        <div className='w-full h-[400px] flex justify-center items-center'>
            <BookOpenIcon className='h-10 w-10 animate-bounce text-orange-400'/>
        </div>
        :
        <div className='h-full ' >
        {bookdata ? 
        <div className='flex flex-col'>
        <div className='w-full text-start flex px-5 space-x-5'>
        <button onClick={()=>GoBack()} className=''>
        <ArrowLeftIcon className='h-6 w-6' />
        </button>
        <h2 className='uppercase font-bold text-black'>All Issued books ({bookdata.length})</h2>
        </div>
        <div className='p-5 h-[500px] scrollbar-none sm:h-[540px] overflow-y-scroll' >
        <p className='px-10 text-start uppercase text-[10px] sm:text-lg'>Student name : {bookdata[0].student_name}</p> 
        {bookdata?.map((book,index)=>(
            <ShowUserBook key={index} GoBack={GoBack} book={book} />
          ))}
        </div>
        </div>
        :
        <div className='text-center'>
            <h1 className='uppercase text-red-500'>No data found</h1>
        </div>
        }
        </div> 
        }
    </div>
    }
    </div>
    </div>
    </>
  )
}

export default ReturnBook