import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full pb-[56.25%]  ">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/D3qHYGO-W-c?autoplay=1&loop=1&mute=1&playlist=D3qHYGO-W-c&controls=0&showinfo=0&modestbranding=1"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="YouTube Video"
    />
  </div>
  );
};

export default HeroSection;
