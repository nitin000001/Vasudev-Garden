import React from "react";
// import aminities from "../assets/aminities.jpg";
// import aminities2 from "../assets/aminities2.jpg";
// // import masterLayout from "../assets/masterplan.jpg";
// import legacy from "../assets/legacy.jpg";
// import flatLayout from "../assets/flatLayout.jpg";
// // import map from "../assets/map.jpg";
// import flatLayout1 from "../assets/flatLayout1.jpg";
import { FaCar } from "react-icons/fa";
import { FaHandHoldingWater } from "react-icons/fa";
import { GiNuclearWaste } from "react-icons/gi";
import { IoThunderstormSharp } from "react-icons/io5";
import { MdCarCrash } from "react-icons/md";
import { FcLandscape } from "react-icons/fc";
import { LiaRoadSolid } from "react-icons/lia";
import { IoWater } from "react-icons/io5";
import { PiFireTruckDuotone } from "react-icons/pi";
import { LuToilet } from "react-icons/lu";
import { GiElectricalResistance } from "react-icons/gi";

const ProjectAmenities = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Title */}
      <h1 id="amenities" className="text-3xl font-extrabold mb-6">
        Project Amenities
      </h1>

      {/* Image Container */}
      <div className=" w-full grid md:grid-cols-5 gap-4 text-center  p-4">
        <div className="rounded-lg bg-white shadow-2xl flex flex-col items-center p-4 hover:scale-105 transition-all duration-300 cursor-pointer ">
          <MdCarCrash className="text-2xl text-black" />
          <p className="text-slate-700">Closed Car Parking</p>
        </div>
        <div className="rounded-lg bg-white shadow-2xl flex flex-col items-center p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
          <FaHandHoldingWater className="text-2xl text-black" />
          <p className="text-slate-700">24X7 Water Supply </p>
        </div>
        <div className="rounded-lg bg-white shadow-2xl flex flex-col items-center p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
          <GiNuclearWaste className="text-2xl text-black" />
          <p className="text-slate-700">Solid Waste Management</p>
        </div>
        <div className="rounded-lg bg-white shadow-2xl flex flex-col items-center p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
          <IoThunderstormSharp className="text-2xl text-black" />
          <p className="text-slate-700">Storm water Drains</p>
        </div>
        <div className="rounded-lg bg-white shadow-2xl flex flex-col items-center  p-4 hover:scale-105 transition-all duration-300 cursor-pointer ">
          <FaCar className="text-2xl text-black" />
          <p className="text-slate-700">Open Parking</p>
        </div>
        <div className="rounded-lg bg-white shadow-2xl flex flex-col items-center p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
          <FcLandscape className="text-2xl text-black" />
          <p className="text-slate-700">Landscaping & Tree</p>
        </div>
        <div className="rounded-lg bg-white shadow-2xl flex flex-col items-center p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
          <LiaRoadSolid className="text-2xl text-black" />
          <p className="text-slate-700">Internal Roads & Footpaths</p>
        </div>
        <div className="rounded-lg bg-white shadow-2xl flex flex-col items-center p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
          <IoWater className="text-2xl text-black" />
          <p className="text-slate-700">Water Conservation</p>
        </div>
        <div className="rounded-lg bg-white shadow-2xl flex flex-col items-center  p-4 hover:scale-105 transition-all duration-300 cursor-pointer ">
          <PiFireTruckDuotone className="text-2xl text-black" />
          <p className="text-slate-700">Fire Fighting System</p>
        </div>
        <div className="rounded-lg bg-white shadow-2xl flex flex-col items-center p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
          <LuToilet className="text-2xl text-black" />
          <p className="text-slate-700">Sewage Treatment</p>
        </div>
        <div className="rounded-lg bg-white shadow-2xl flex flex-col items-center p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
          <GiElectricalResistance className="text-2xl text-black" />
          <p className="text-slate-700">Electrification Solar Energy</p>
        </div>

        {/* <img
          src={aminities}
          alt="aminities"
          className="w-full max-h-[700px] object-contain border rounded-lg shadow-md"
        />
        <img
          src={aminities2}
          alt="aminities"
          className="w-full max-h-[700px] object-contain border rounded-lg shadow-md"
        /> */}
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

      {/* <div
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
      </div> */}

      {/* <div
        id="projects"
        className="text-3xl font-extrabold mb-6 mt-9 scroll-mt-20"
      >
        <h1 className="mt-5 mb-5">A legacy of excellence</h1>
        <img
          src={legacy}
          alt="aminities"
          className="w-full max-h-[700px] object-contain border rounded-lg shadow-md"
        />
      </div> */}
    </div>
  );
};

export default ProjectAmenities;
