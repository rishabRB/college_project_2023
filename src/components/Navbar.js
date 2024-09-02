import React, { useState } from "react";
import {
  BookOpenIcon,
  HomeIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { publicRequest } from "./requestMethod";
import { addBooks, clearBook } from "../features/bookMaintainSlice";
import { enqueueSnackbar } from "notistack";

function Navbar({ name, home, searchBar }) {
  const dispatch = useDispatch();
  const currUser = localStorage.getItem("user");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const getSearchedBook = async () => {
    try {
      const res = await publicRequest.get(
        `/books/getAllbook?name=${searchText}`
      );
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
    } else {
      enqueueSnackbar("Enter Book Name", { variant: "error" });
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
    <nav className="sticky top-0 z-50 bg-white shadow-lg p-4">
      <div className="flex items-center justify-between">
        <div
          onClick={() => navigate("/home")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <BookOpenIcon className="h-8 w-8 text-black" />
          {home ? (
            <div className="text-black font-medium text-lg sm:text-xl">
              L<span className="text-orange-500">M</span>S
            </div>
          ) : (
            <div className="text-orange-500 tracking-wider font-medium text-lg sm:text-xl uppercase">
              {name}
            </div>
          )}
        </div>

        <div className="flex items-center">
          {currUser ? (
            <button
              onClick={() => {
                if (window.location.pathname === "/dashboard") navigate("/home");
                else if (window.location.pathname === "/home" && currUser)
                  navigate("/dashboard");
                else if (window.location.pathname === "/search" && currUser)
                  navigate("/dashboard");
              }}
              className="p-2"
            >
              <HomeIcon className="h-8 w-8 text-orange-500" />
            </button>
          ) : (
            <div className="w-full sm:w-[150px] font-bold text-orange-400 flex items-center justify-between">
              <button onClick={handleAllBook} className="text-sm sm:text-base">
                ALL BOOKS
              </button>
              <button onClick={handleClickLogin}>
                <UserCircleIcon className="h-8 w-8 text-orange-500" />
              </button>
            </div>
          )}
        </div>
      </div>

      {searchBar && (
        <div className="mt-4 flex flex-col sm:flex-row sm:justify-center items-center">
          <div className="border border-orange-500 w-full sm:w-[250px] md:w-[300px] flex items-center mb-2 sm:mb-0">
            <MagnifyingGlassIcon className="h-6 w-6 m-[9px] text-orange-500" />
            <input
              className="bg-white w-full outline-none p-2"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
            />
          </div>
          <button
            onClick={handleClick}
            className="sm:ml-2 p-2 text-lg bg-orange-400 font-bold tracking-wider text-white uppercase rounded hover:scale-105 transition-transform duration-150 ease-out"
          >
            Search
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
