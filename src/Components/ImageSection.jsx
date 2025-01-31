import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';


const ImageSlider = () => {
  const images = [
    "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[400px] bg-[#615C57]/30 backdrop-blur-lg shadow-lg">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 p-2 bg-gray-800/60 rounded-full hover:bg-gray-800 text-white"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full max-w-lg h-auto rounded-lg"
      />

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 p-2 bg-gray-800/60 rounded-full hover:bg-gray-800 text-white"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ImageSlider;
