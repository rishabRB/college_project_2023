import React,{useState} from 'react'
import { BookOpenIcon,HomeIcon ,UserCircleIcon,MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/adminLoginSlice';



function Navbar({name,home,searchBar}) {
  const dispatch = useDispatch()
  const {currUser} = useSelector(state => state.adminLogin)
  const[searchText,setSearchText] = useState("")
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate("/login")
  }
    return (
        <nav className="sticky flex items-center justify-between p-4 bg-[#fff] shadow-lg">
          <div onClick={()=> navigate("/home")} className="flex items-center space-x-2 px-2">
            <BookOpenIcon className='h-8 w-8  text-[black]' />
        {home ? <div className="text-black font-medium text-xl">L
          <span className='text-orange-500'>M</span>
          S</div>
          :
          <div className="text-orange-500 tracking-[3px] font-medium text-xl uppercase">{name}</div>
        } 
         </div>
        {searchBar && <div className='w-full flex justify-center items-center '>
                   <div className='border border-orange-500 w-[250px] sm:w-[300px]  flex items-center justify-start'>
                    <MagnifyingGlassIcon className='h-6 w-6 m-[9px] text-orange-500' />
                    <input 
                    className='bg-white-500 w-full outline-0 p-2'
                    type="" 
                    name="" 
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                    placeholder='Search'
                    />
                    </div>
                    <button
                    onClick={handleClick}
                    className='p-2 text-xl bg-orange-400 font-bold font-BebasNeue tracking-[2px] hover:scale-105 hover:transition hover:duration-150 ease-out  text-white uppercase '
                    >Search</button>
         </div>}
         <div className='items-cente flex' >
         {currUser ? 
         <button onClick={()=> {
          console.log(window.location.pathname)
          if(window.location.pathname === "/dashboard") navigate("/home")
          else if(window.location.pathname == "/home" && currUser) navigate('/dashboard')

        }
        } >
              <HomeIcon className='h-8 w-8 text-orange-500 ' /> 
         </button>
         :
         <button onClick={handleClick}>
              <UserCircleIcon className='h-8 w-8 text-orange-500' />
         </button>
        }   
        </div>
        </nav>
      );
}

export default Navbar