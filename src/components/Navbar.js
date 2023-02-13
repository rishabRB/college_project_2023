import React from 'react'
import { BookOpenIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';


function Navbar({name,home}) {
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate("/login")
  }
    return (
        <nav className="sticky flex items-center justify-between p-4 bg-[#fff] shadow-lg">
          <div className="flex items-center space-x-2 px-2">
            <BookOpenIcon className='h-8 w-8  text-[black]' />
         {home ? <div className="text-black font-medium text-xl">L
          <span className='text-orange-500'>M</span>
          S</div>
          :
          <div className="text-orange-500 tracking-[3px] font-medium text-xl uppercase">{name}</div>
        } 
          </div>
          <div className='flex items-cente'>
              <button onClick={handleClick}>
              <UserCircleIcon className='h-8 w-8 text-orange-500' />
              </button>
          </div>
        </nav>
      );
}

export default Navbar