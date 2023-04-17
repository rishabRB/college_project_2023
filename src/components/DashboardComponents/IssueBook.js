import { BookOpenIcon, DocumentTextIcon, FaceSmileIcon} from '@heroicons/react/24/solid'
import React, { useState, useEffect} from 'react'
import {useForm,Controller} from 'react-hook-form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { publicRequest } from '../requestMethod';

function IssueBook() {
  const {register,control, handleSubmit, watch,reset,formState: { errors }} = useForm();
  const [issued,setIssued] = useState(false) //state for book issuing
  const [isIssue,setisIssue] = useState(false) //state for checking whether book is availble for issue
  const [Issuing,setIssuing] = useState(false) // for laoding while calling api
  const [bookError,setbookError] = useState(false) // state for not finding book in database
  const [bookdata,setBookdata] = useState(null) //book data



  // for fetching book data
  const onSubmit=async(data)=>{
    sendStudentDetail(data.student_name,data.registration_number)
    setIssuing(true)
    try{
      const res = await publicRequest.post("/books/issuebook",data)
      if(res.status === 200) {
        setIssued(true)
        setIssuing(false)
        setTimeout(()=>{
          newIssue()
        },2000)
      }
     }
    catch(err){
      setIssued(false)
    }
  }

  const sendStudentDetail=async (student_name,registration_number)=>{
    try{
        await publicRequest.post("/user/studentdetail",{student_name:student_name,registration_number:registration_number})
    }
    catch(err){
      console.log(err)
    }
  }

  // for handling wheather the book is available for issuing
  useEffect(()=>{
    if(bookdata?.availableBooks === 0) setisIssue(true)
    else setisIssue(false)
  },[bookdata])


  // for checking and calling getbook api
  useEffect(()=>{
    if(watch("book_id").length === 5) {
      getBookDetails()
    }
    if(watch("book_id").length < 5) {
      setBookdata(null)
      setbookError(false)
    }
  },[watch("book_id")])

  const getBookDetails= async()=>{
    try{
      const res = await publicRequest.get(`/books/getbook?book_id=${watch("book_id")}`)
      if(res.status === 200) setBookdata(res.data)
    }catch(err){
      if(err.response.status === 400) setbookError(true)
    }
  }

  // reseting every data
  const newIssue = ()=>{
    setIssued(false)
    reset()
    setBookdata(null)
  }
  
  // regular expression for only numbers 
  const onlyNumbers = /^\d+$/;

  
  return (
    <>
    <div className='flex flex-col h-full sm:h-[90vh] font-mono '>
    <div className='p-5 m-5 border-2 border-gray-200 flex space-x-2 items-center justify-center'>
      <DocumentTextIcon className='h-8 w-8 text-orange-500' />
      <h1 className='headingText'>Issue book</h1>
    </div>

    {Issuing ? 
    <div className='flex items-center w-full h-full justify-center'>
      <BookOpenIcon className='h-10 w-10 animate-bounce text-orange-400' />
    </div>
    :
    <div className='px-5 w-full flex flex-col sm:flex-row justify-around items-center space-x-4 space-y-4'>
        {!issued ? <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex sm:w-1/2 justify-start flex-col space-y-4'>
        <h2 className='uppercase font-medium'>Enter the following details</h2>
            <input 
            className='issueButton'
            placeholder='Book id'
            {...register("book_id", { required:true,minLength:5,pattern:onlyNumbers})}
            maxLength={5}
            aria-invalid={errors.book_id ? "true" : "false"} 
            />
            {bookError &&
            <span className='text-red-400 px-2 text-[10px] text-start'>Enter correct book Id</span>
            }
            {errors.book_id && errors.book_id.type === "pattern" && (
            <span className='text-red-400 px-2 text-[10px] text-start'>Please enter only number</span>
            )}
            {errors.book_id?.type === 'required' && <span className='text-red-400 px-2 text-[10px] text-start' role="alert">Book id is required</span>}
            {errors.book_id && errors.book_id.type === "minLength" && (
            <span className='text-red-400 px-2 text-[10px] text-start'>Book id muct be 5 digit</span>
            )}
            <input
            {...register('student_name',{required:true})}
             placeholder='Student Name'
             className='issueButton'
            aria-invalid={errors.student_name ? "true" : "false"} 
            />
            {errors.student_name?.type === 'required' && <span className='text-red-400 px-2 text-[10px] text-start' role="alert">Student name is required</span>}

            <input 
            {...register('registration_number',{pattern:onlyNumbers,required:true,minLength:11})}
            maxLength={11}
            className='issueButton'
            placeholder='Registration number'
            aria-invalid={errors.registration_number ? "true" : "false"} 
            />

            {errors.registration_number && errors.registration_number.type === "pattern" && (
            <span className='text-red-400 px-2 text-[10px] text-start'>Please enter only number</span>
            )}
            {errors.registration_number?.type === 'required' && <span className='text-red-400 px-2 text-[10px] text-start' role="alert">Registration number is required</span>}
            {errors.registration_number && errors.registration_number.type === "minLength" && (
            <span className='text-red-400 px-2 text-[10px] text-start'>Registration number muct be 11 digit</span>
            )}

          <Controller
           control={control}
           rules={{ required: true }}
           name='return_date'
           render={({ field }) => (
           <DatePicker
           placeholderText='Return date'
           onChange={(date) => field.onChange(date)}
           selected={field.value}
           className='issueButton w-full'
           />
           )}
           />
            {errors.return_date?.type === 'required'  && <span className='text-red-400 px-2 text-[10px] text-start' role="alert">Return date is required</span>}
             <input
             type="submit"
            disabled={isIssue}
            className='px-5 py-3 w-full sm:w-[50%] disabled:bg-black/75 disabled:cursor-not-allowed bg-black text-white rounded-2xl '
              />
        </form>
        :
        <div className='space-y-2 border flex flex-col justify-center bg-orange-100/90 items-center w-[500px] h-[200px] p-10'>
            <FaceSmileIcon className='h-10 w-10 text-orange-400' />
            <h1 className='uppercase flex text-green-500'>Thank you for Isssuing.</h1>
        </div>
        }
                
        {/* preview section */}
        {bookdata ? 
         <div className={`${issued ? 'hidden':'hidden md:flex'}  w-full sm:w-1/3 h-[400px] items-center border-2  justify-center ${isIssue ? 'border-red-300' : ''} p-5`}>
            <div className={`flex w-full flex-col  items-center justify-center space-y-4`}>
               <span className='uppercase'>Book preview</span>
               <img className='w-[200px] h-[200px] ' src={bookdata.book_image} alt="" /> 
               <div className='flex flex-col items-start space-y-1'>
                  <h2 className='text-sm uppercase font-medium'>Book id : {bookdata.book_id}</h2>
                  <h2 className='text-sm uppercase font-medium'>Name : {bookdata.name}</h2>
                  <h2 className='text-sm uppercase font-medium'>Author : {bookdata.author}</h2>
               </div>
               {isIssue && <h2 className='text-red-400 uppercase'>Book Not available for Issue</h2>}
            </div> 
           </div>
        :
        <div className='hidden md:flex w-full sm:w-1/3 h-[400px] items-center  justify-center border p-5'>
            <div className='flex w-full flex-col  items-center justify-center space-y-4'>
            { !watch("book_id") ?
              <div>
              <span className={`uppercase text-xl`}>Book preview</span>
               <h1 className='text-[10px] uppercase text-red-400'>Enter book id </h1 >
              </div>
               :
            <div>
              {!bookError ? <BookOpenIcon className='h-8 w-8 animate-bounce text-orange-400' /> : <h1 className='text-red-400 uppercase'>No book found</h1>}
            </div>
            }
            </div>
        </div>
        }
    </div>
    }
    </div>
    </>
  )

}
export default IssueBook