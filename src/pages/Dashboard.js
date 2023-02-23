import { ArrowLeftOnRectangleIcon,ChartBarIcon,DocumentTextIcon, FolderArrowDownIcon, HomeIcon, PencilSquareIcon, PlusIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EditBook from '../components/DashboardComponents/EditBook'
import Footer from '../components/Footer'
import IssueBook from '../components/DashboardComponents/IssueBook'
import IssusedBook from '../components/DashboardComponents/IssusedBook'
import Navbar from '../components/Navbar'
import ReturnBook from '../components/DashboardComponents/returnBook'
import Addbook  from '../components/DashboardComponents/Addbook'

function Dashboard() {

  const navigate = useNavigate()

  const [issue,setIssue] = useState(true)
  const [returnBook, setReturnBook] = useState(false)
  const [IssuedBook,setIssuedBook] = useState(false)
  const [AddBook,setAddBook] = useState(false)
  const [editBook,setEditBook] = useState(false)

  const handleClick=(item)=>{
    switch(item){
      case "issue" : 
      {
        resetButton() 
        setIssue(true)
        break;
      }
      case "returnBook" :       
      {
        resetButton() 
        setReturnBook(true)
        break;
      }
      case "issusedBook" :      
       {
        resetButton() 
        setIssuedBook(true)
        break;
      }
      case "addBook" :       
      {
        resetButton() 
        setAddBook(true)
        break;
      }

      case "editBook" :     
       {
        resetButton() 
        setEditBook(true)
        break;
      }
  }
}

  const resetButton=()=>{
    setIssue(false)
    setReturnBook(false)
    setIssuedBook(false)
    setAddBook(false)
    setEditBook(false)
  }

  const handleLogOut=()=>{
    navigate("/")
  }

  return (
    <>
    <Navbar name="Dashboard"/>
    <section className= "bg-white flex">
      {/* work you can do section */}
      <sidebar className="w-[20%] border shadow-xl bg-orange-400 flex ">
      <div className='flex'>
      <div className=' w-[40px] h-full py-3 px-2 bg-orange-500 '>
        <HomeIcon className='h-6 w-6' />
      </div>
      <div className='flex flex-col font-bold'>

      <div onClick={()=>handleClick("issue")} className='button'>
          <DocumentTextIcon className='h-6 w-6'/>
          <span className='sidebarText'>Issue</span>
        </div>


        <div onClick={()=>handleClick("returnBook")} className='button'>
          <FolderArrowDownIcon className='h-6 w-6'/>
          <span className='sidebarText'>Return</span>
        </div>


        <div onClick={()=>handleClick("issusedBook")} className='button'>
          <ChartBarIcon className='h-6 w-6'/>
          <span className='sidebarText'>Issused Books</span>
        </div>

        <div onClick={()=>handleClick("addBook")} className='button'>
          <PlusIcon className='h-6 w-6'/>
          <span className='sidebarText'>Add book</span>
        </div>

        <div onClick={()=>handleClick("editBook")} className='button'>
          <PencilSquareIcon className='h-6 w-6'/>
          <span className='sidebarText'>Edit book</span>
        </div>

        <div onClick={()=>handleLogOut()} className='button'>
          <ArrowLeftOnRectangleIcon className='h-6 w-6'/>
          <span className='sidebarText'>Log out</span>
        </div>
      </div>
      </div>
      </sidebar>

      {/* work to do section */}
      <div className='w-[80%] my-2'>
        {issue && <IssueBook /> }
        {returnBook && <ReturnBook />}
        {IssuedBook && <IssusedBook />}
        {AddBook && <Addbook />}
        {editBook && <EditBook />}
      </div>
    </section>
    <Footer bgColor={true} />
    </>
  )
}

export default Dashboard