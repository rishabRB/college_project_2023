import { ArrowLeftCircleIcon,ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Carousel = ({ quotes }) => {
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    setIndex(index === 0 ? quotes.length - 1 : index - 1);
  };

  const handleNextClick = () => {
    setIndex(index === quotes.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="relative h-[500px] w-[80%] p-10 bg-white">
    
     {/* arrow left */}
      <button
        className="absolute left-0 top-1/2 p-5 transform -translate-y-1/2"
        onClick={handlePrevClick}
      >
        <ArrowLeftCircleIcon  className="h-5 w-5 text-black"/>
      </button>

     {/* quotes */}
      <div className="flex relative flex-col text-black items-center justify-center w-full h-full p-10">
        <h1 className="text-4xl absolute left-8 top-32 italic">"</h1>
        <blockquote className="text-center text-sm sm:text-2xl italic font-extrabold">
          {quotes[index].quote}
        </blockquote>
        <h1 className="text-4xl absolute right-8 bottom-32 m-2 italic">"</h1>
        <cite className="block absolute bottom-16 text-center text-sm font-extrabold">
          — {quotes[index].author}
        </cite>
      </div>

     {/* arrow right */}
      <button
        className="absolute p-5 right-0 top-1/2 transform -translate-y-1/2"
        onClick={handleNextClick}
      >
        <ArrowRightCircleIcon className="h-5 w-5 text-black" />
      </button>
    </div>
  );
};

export default Carousel;

