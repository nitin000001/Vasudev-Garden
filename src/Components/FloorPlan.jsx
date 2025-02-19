import React, { useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import OneBHK317 from "../assets/1BHK 317 sq ft carpet.jpg";
import OneBHK336 from "../assets/1BHK 336 sq ft carpet.jpg";
import OneBHK37951 from "../assets/1BHK 379.51 sqft carpet.jpg";
import OneBHK39364 from "../assets/1BHK 393.64 sq ft carpet.jpg";
import OneBHK39881 from "../assets/1BHK 398.81 sq ft carpet.jpg";
import OneBHK40785 from "../assets/1BHK 407.85 sqft carpet.jpg";
import two91 from "../assets/two91.jpg";

export default function FloorPlan() {
  const [selectedPlan, setSelectedPlan] = useState("1BHK");
  const [selectedImage, setSelectedImage] = useState(OneBHK317);

  const floorPlans = {
    "1RK": [{ carpetArea: "291 sq.ft", image: two91 }],
    "1BHK": [
      { carpetArea: "317 sq.ft", image: OneBHK317 },
      { carpetArea: "336 sq.ft", image: OneBHK336 },
      { carpetArea: "379.51 sq.ft", image: OneBHK37951 },
      { carpetArea: "393.64 sq.ft", image: OneBHK39364 },
      { carpetArea: "398.81 sq.ft", image: OneBHK39881 },
      { carpetArea: "407.85 sq.ft", image: OneBHK40785 },
    ],
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 id="PricePlans" className="text-3xl font-extrabold mb-6 text-center md:text-left">
        Price and Floor Plans
      </h1>

      {/* Plan Selection Buttons */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
        {Object.keys(floorPlans).map((plan) => (
          <button
            key={plan}
            className={`px-6 py-2 rounded-md transition-all duration-200 text-sm md:text-base border cursor-pointer 
              ${selectedPlan === plan ? "bg-purple-500 text-white" : "bg-gray-800 hover:bg-purple-400 hover:text-white"}`}
            onClick={() => setSelectedPlan(plan)}
          >
            {plan}
          </button>
        ))}
      </div>

      {/* Carpet Area Selection Buttons */}
      <div className="flex overflow-x-auto gap-2 md:justify-start mb-4 px-2 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-300">
        {floorPlans[selectedPlan].map((plan, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md border min-w-[110px] text-sm md:text-base transition-all duration-200 
              cursor-pointer whitespace-nowrap 
              ${selectedImage === plan.image ? "bg-purple-500 text-white" : "bg-gray-900 hover:bg-purple-400 hover:text-white"}`}
            onClick={() => setSelectedImage(plan.image)}
          >
            {plan.carpetArea}
          </button>
        ))}
      </div>

      {/* Selected Floor Plan Image */}
      <div className="border relative rounded-md p-4 shadow-md bg-white flex flex-col items-center">
        <span className="absolute flex gap-1 items-center left-5 top-2 text-green-500">
          <GrStatusGood /> RERA
        </span>
        <img
          src={selectedImage}
          alt="Selected Floor Plan"
          className="w-full h-96 object-contain mb-4 p-4"
        />

        {/* Contact Button */}
        <a
          href="https://wa.me/7770017997"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-purple-500 text-white rounded-md transition-all duration-200 hover:bg-purple-600"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
