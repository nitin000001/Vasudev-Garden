import React from "react";
import aminities from "../assets/aminities.jpg";
import aminities2 from "../assets/aminities2.jpg";
// import masterLayout from "../assets/masterplan.jpg";
import legacy from "../assets/legacy.jpg";
import flatLayout from "../assets/flatLayout.jpg";
// import map from "../assets/map.jpg";
import flatLayout1 from "../assets/flatLayout1.jpg";

const ProjectAmenities = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Title */}
      <h1 id="amenities" className="text-3xl font-extrabold mb-6">
        Amenities
      </h1>

      {/* Image Container */}
      <div className="imgContainer relative w-full flex overflow-x-auto ">
        <img
          src={aminities}
          alt="aminities"
          className="w-full max-h-[700px] object-contain border rounded-lg shadow-md"
        />
        <img
          src={aminities2}
          alt="aminities"
          className="w-full max-h-[700px] object-contain border rounded-lg shadow-md"
        />
      </div>

      {/* <div
        id="MasterLayout"
        className="text-3xl font-extrabold mb-6 mt-9 scroll-mt-20" // Add scroll offset
      >
        <h1 className="mt-5 mb-5">Master Layout</h1>
        <img
          src={masterLayout}
          alt="Master Layout"
          className="w-full max-h-[700px] object-contain border rounded-lg shadow-md"
        />
      </div> */}

      <div
        id="flatLayout"
        className="text-3xl font-extrabold mb-6 mt-9 scroll-mt-20"
      >
        <h1 className="mt-5 mb-5">Flat Layout</h1>
        <div className="imgContainer relative w-full flex overflow-x-auto">
          <img
            src={flatLayout1}
            alt="aminities"
            className="w-full max-h-[700px] object-contain border rounded-lg shadow-md"
          />
          <img
            src={flatLayout}
            alt="aminities"
            className="w-full max-h-[700px] object-contain border rounded-lg shadow-md"
          />
        </div>
      </div>

      <div
        id="projects"
        className="text-3xl font-extrabold mb-6 mt-9 scroll-mt-20"
      >
        <h1 className="mt-5 mb-5">A legacy of excellence</h1>
        <img
          src={legacy}
          alt="aminities"
          className="w-full max-h-[700px] object-contain border rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ProjectAmenities;
