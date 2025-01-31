import React from "react";
import ImageSection from "./ImageSection";
import PriceAndFloorPlans from "./PriceAndFloorPlans";

const PropertyContent = () => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="bottom flex flex-wrap justify-between items-start gap-6">
          {/* Left Section */}
          <div className="flex-1 min-w-[250px]">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-semibold">Vasudev Garden</h1>
              <span className="text-xs text-green-600 flex items-center gap-1">
                <span>✔</span> RERA
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              By <span className="text-blue-700"> Vasudev Garden Private Limited</span>
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
            Laxminarayan CHSL, Mhatre Wadi , Dahisar West Mumbai 400068
            </p>
          </div>

          {/* Right Section */}
          <div className="price flex-1 min-w-[250px] text-right">
            <p className="mb-2">
              <span className="text-2xl font-extrabold">
              ₹ 93.53 Lac - 1.59 Cr| 
              </span>{" "}
              <span className="text-sm text-gray-900">24k/sq.ft</span>
            </p>
            <p className="text-xs text-gray-700 mb-4">Govt taxes additional</p>
            <p className="text-blue-700 text-sm mb-1">EMI starts at ₹62.55 K</p>
            <div className="flex items-end gap-3 justify-end">
            <button className="bg-[#5E23DC] mt-4 mb-4 px-6 py-2 text-white text-sm rounded shadow hover:bg-[#4a1bba] transition">
              <a
                href="https://wa.me/7770017997"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get detailed pricing here
              </a>
            </button>
            <button className="bg-[#5E23DC] mt-4 mb-4 px-6 py-2 text-white text-sm rounded shadow hover:bg-[#4a1bba] transition">
              <a
                href="https://wa.me/7770017997"
                target="_blank"
                rel="noopener noreferrer"
              >
               Check all offers
              </a>
            </button>
            </div>
          </div>
        </div>
        {/* image */}
        <ImageSection />
        <PriceAndFloorPlans />
      </div>
    </div>
  );
};

export default PropertyContent;
