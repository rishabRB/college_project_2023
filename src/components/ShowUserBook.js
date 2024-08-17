import React, { useState, useEffect } from "react";
import { BookOpenIcon, FaceSmileIcon } from "@heroicons/react/24/solid";
import { publicRequest } from "./requestMethod";
import { enqueueSnackbar } from "notistack";

function ShowUserBook({ book, GoBack, updateBookData }) {
  const [bookdata, setBookdata] = useState(null); //book data
  const [isdeleteLoading, setIsdeleteLoading] = useState(false);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    try {
      const res = await publicRequest.get(
        `/books/getbook?book_id=${book.book_id}`
      );
      if (res.status === 200) setBookdata(res.data);
    } catch (err) {
      if (err.response.status === 400) console.log(err);
    }
  };

  const handleClick = async () => {
    setIsdeleteLoading(true);
    try {
      const res = await publicRequest.delete(
        `books/deleteissuedBook?registration_number=${book.registration_number}&book_id=${book.book_id}`
      );
      if (res.status === 200) {
        enqueueSnackbar("Book return successfully", { variant: "success" });
        updateBookData();
      }
    } catch (err) {
      if (err.response.status === 400) {
        enqueueSnackbar("Book return failed ! Try again", { variant: "error" }); 
      }
    }
  };

  return (
    <div className={`w-full border  my-5 p-5`}>
      {bookdata ? (
        <div className="">
          {!isdeleteLoading ? (
            <div className="flex flex-col space-y-5  sm:space-y-0 items-center sm:grid sm:grid-cols-3">
              {/* image sectionk */}
              <div className="">
                {bookdata.image !== null ? (
                  <img
                    className="w-[180px] h-[180px] "
                    src={bookdata.book_image}
                    alt=""
                  />
                ) : (
                  <div className="w-[180px] h-[180px] border flex justify-center items-center">
                    <p className="uppercasae text-red-400 rotate-[-1500deg]">
                      NO Image
                    </p>
                  </div>
                )}
              </div>
              {/* book details section */}
              <div className="p-1 flex flex-col justify-center items-start">
                <h2 className="text-sm uppercase font-medium">
                  Book id : {bookdata.book_id}
                </h2>
                <h2 className="text-sm uppercase font-medium">
                  Name : {bookdata.name}
                </h2>
                <h2 className="text-sm uppercase font-medium">
                  Author : {bookdata.author}
                </h2>
                <h2 className="text-sm uppercase font-medium">
                  Return date : {book.return_date.slice(0, 10)}
                </h2>
              </div>
              {/* button section */}
              <div className="">
                <button
                  onClick={() => handleClick()}
                  className="py-5 px-10 bg-orange-400 text-black uppercase rounded-lg"
                >
                  Return
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <BookOpenIcon className="h-3 w-3 text-orange-200 animate-bounce" />
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <BookOpenIcon className="h-3 w-3 text-orange-200 animate-bounce" />
        </div>
      )}
    </div>
  );
}

export default ShowUserBook;
