import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { publicRequest } from '../components/requestMethod';
import { useDispatch } from 'react-redux';
import { addBooks, clearBook } from '../features/bookMaintainSlice';

function Home() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getBook = async (filterField) => {
    try {
      const res = await publicRequest.get(`/books/getAllbook?${filterField}=${filterField === 'name' ? name : author}`);
      if (res.status === 200) {
        dispatch(addBooks(res.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = () => {
    dispatch(clearBook());
    if (name) {
      getBook('name');
      navigate('/searchLoading');
    } else if (author) {
      getBook('author');
      navigate('/searchLoading');
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  };

  return (
    <>
      <Navbar home={true} />

      {/* Banner section */}
      <section className="h-[80vh] bg-no-repeat bg-fixed bg-cover flex items-center bg-[url('https://ucarecdn.com/84aa8c86-f3cc-44e7-97f8-c011b720ae73/pexelsphoto2041540.jpeg')] bg-image">
        <div className="relative flex justify-center sm:justify-end w-full">
          <div className="sm:absolute sm:right-20 top-24 sm:top-44 p-6 sm:p-10 w-[90%] sm:w-[300px] bg-white rounded flex flex-col justify-center items-center space-y-3">
            {error && (
              <div className="text-[10px] text-red-600">
                <span>Enter name</span>
              </div>
            )}
            <h2 className="uppercase text-center text-sm sm:text-base">
              Find your <span className="text-orange-500 font-bold">book</span>
            </h2>
            <input
              className="bg-white-500 rounded border p-2 sm:p-3 w-full outline-none"
              type="text"
              name="bookName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Book Name"
            />
            <input
              className="bg-white rounded border p-2 sm:p-3 w-full outline-none"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author's name"
            />
            <button
              onClick={handleClick}
              className="p-2 sm:p-3 rounded font-semibold bg-black text-sm text-white uppercase w-full"
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
