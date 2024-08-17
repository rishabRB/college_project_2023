import React, { useState } from "react";
import {
  BookOpenIcon,
  HomeIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "./requestMethod";
import { addBooks, clearBook } from "../features/bookMaintainSlice";
import { enqueueSnackbar } from "notistack";

function Navbar({ name, home, searchBar }) {
  const dispatch = useDispatch();
  const currUser = localStorage.getItem('user')
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const getSearchedBook = async () => {
    try {
      const res = await publicRequest.get(
        `/books/getAllbook?name=${searchText}`
      );
      console.log(res.data);
      if (res.status === 200) {
        dispatch(addBooks(res.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    if (searchText) {
      dispatch(clearBook());
      getSearchedBook();
      navigate("/searchLoading");
    }
    else{
        enqueueSnackbar("Enter Book Name",{variant : "error"})
    }
  };

  const getBook = async () => {
    try {
      const res = await publicRequest.get(`/books/getbookAllBooks`);
      if (res.status === 200) {
        dispatch(addBooks(res.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAllBook = () => {
    getBook();
    navigate("/allBooks");
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="sticky flex items-center justify-between p-4 bg-[#fff] shadow-lg">
      <div
        onClick={() => navigate("/home")}
        className="flex items-center space-x-2 px-2"
      >
        <BookOpenIcon className="h-8 w-8  text-[black]" />
        {home ? (
          <div className="text-black font-medium text-xl">
            L<span className="text-orange-500">M</span>S
          </div>
        ) : (
          <div className="text-orange-500 tracking-[3px] font-medium text-xl uppercase">
            {name}
          </div>
        )}
      </div>
      {searchBar && (
        <div className="w-full flex justify-center items-center ">
          <div></div>
          <div className="border border-orange-500 w-[250px] sm:w-[300px]  flex items-center justify-start">
            <MagnifyingGlassIcon className="h-6 w-6 m-[9px] text-orange-500" />
            <input
              className="bg-white-500 w-full outline-0 p-2"
              type=""
              name=""
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
            />
          </div>
          <button
            onClick={handleClick}
            className="p-2 text-xl bg-orange-400 font-bold font-BebasNeue tracking-[2px] hover:scale-105 hover:transition hover:duration-150 ease-out  text-white uppercase "
          >
            Search
          </button>
        </div>
      )}
      <div className="items-cente flex">
        {currUser ? (
          <button
            onClick={() => {
              if (window.location.pathname === "/dashboard") navigate("/home");
              else if (window.location.pathname == "/home" && currUser)
                navigate("/dashboard");
              else if (window.location.pathname == "/search" && currUser)
                navigate("/dashboard");
            }}
          >
            <HomeIcon className="h-8 w-8 text-orange-500 " />
          </button>
        ) : (
          <div className="w-[150px] font-bold text-orange-400 flex items-center justify-between">
            <button className="" onClick={handleAllBook}>
              ALL BOOKS
            </button>
            <button onClick={handleClickLogin}>
              <UserCircleIcon className="h-8 w-8 text-orange-500" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
