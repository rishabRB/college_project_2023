import { UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../features/apicall';
import { enqueueSnackbar } from 'notistack';

function Login() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.adminLogin);

  const onSubmit = (data) => {
    if (!data.username) {
      enqueueSnackbar("Enter Username", { variant: "error" });
    } else if (!data.password) {
      enqueueSnackbar("Enter Password", { variant: "error" });
    } else {
      userLogin(data);
    }
  };

  const userLogin = (data) => {
    LoginUser(dispatch, data);
    navigate('/loginLoading');
  };

  return (
    <>
      <Navbar home={true} />
      <div className='h-[80vh] relative flex justify-center items-center bg-no-repeat bg-fixed bg-cover bg-[url("https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]'>
        <div className='w-[90%] sm:w-[400px] h-[420px] py-5 px-5 sm:px-10 bg-white rounded-xl sm:absolute sm:right-12'>
          {/* error section */}
          {error && (
            <div className='text-[10px] text-red-600'>
              <span>Incorrect password/username</span>
            </div>
          )}

          {/* default section */}
          <div className='flex items-center justify-center my-5'>
            <UserCircleIcon className='h-[60px] w-[60px]' />
          </div>

          <div className='m-5 text-center'>
            <h1 className='text-2xl font-extrabold'>Log in</h1>
            <span className='text-[12px] text-gray-500'>Enter your credentials</span>
          </div>

          {/* form section */}
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center space-y-5'>
            <input
              {...register('username')}
              className='w-full px-5 py-3 border border-gray-300 rounded outline-0'
              placeholder='Username'
            />
            <input
              {...register('password')}
              className='w-full px-5 py-3 border border-gray-300 rounded outline-0'
              placeholder='Password'
              type="password"
            />
            <input
              type="submit"
              className='bg-black text-white px-5 py-3 w-full sm:w-[100px] uppercase font-bold rounded-full'
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
