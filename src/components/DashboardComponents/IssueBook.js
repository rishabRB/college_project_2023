import { DocumentTextIcon, HomeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import {useForm} from 'react-hook-form'

function IssueBook() {
  const {register, handleSubmit, watch, formState: { errors }} = useForm();
  const onSubmit=(data)=>{
  console.log(data)
 }  
  return (
    <>
    <div className='flex flex-col h-full sm:h-[86vh] font-mono '>
    <div className='p-5 m-5 border-2 border-gray-200 flex space-x-2 items-center justify-center'>
      <DocumentTextIcon className='h-8 w-8 text-orange-500' />
      <h1 className='headingText'>Issue book</h1>
    </div>
    <div className='px-5 w-full flex flex-col sm:flex-row justify-around items-center space-x-4 space-y-4'>
        <form className='flex sm:w-1/2 justify-start flex-col space-y-4'>
        <h2 className='uppercase font-medium'>Enter the following details</h2>
            <input 
            {...register('book_id')}
            className='issueButton'
            placeholder='Book id'
            />
            <input
            {...register('student_name')}
             placeholder='Student Name'
             className='issueButton'
             />
            <input 
            {...register('registration_number')}
            className='issueButton'
            placeholder='Registration number'
            />
            <input
             {...register('return_date')}
             placeholder='Return date'
             className='issueButton'
             />
             <input
             type="submit"
              className='px-5 py-3 w-full sm:w-[50%] bg-black text-white rounded-2xl'
              />
        </form>
        {/* preview section */}
        <div className='flex w-full sm:w-1/3 h-[400px] items-center  justify-center border p-5'>
            <div className='flex w-full flex-col  items-center justify-center space-y-4'>
               <span className='uppercase'>Book preview</span>
               <img className='w-[200px] h-[200px] ' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg" alt="" /> 
               <div className='flex flex-col items-start space-y-1'>
                  <h2 className='text-sm uppercase font-medium'>Book id : 12262</h2>
                  <h2 className='text-sm uppercase font-medium'>Name : The Great Gatsby</h2>
                  <h2 className='text-sm uppercase font-medium'>Author : Joshep Murphy</h2>
               </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )

}
export default IssueBook