import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]   flex justify-center items-center">
      <iframe
        className="absolute top-0 left-0 md:p-[80px] pt-[50px] w-full  h-full"
        src="https://www.youtube.com/embed/AFXLvGaG1i0?autoplay=1&loop=1&mute=1&playlist=AFXLvGaG1i0&controls=0&showinfo=0&modestbranding=1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube Video"
      />
    </div>
  );
};

export default HeroSection;
