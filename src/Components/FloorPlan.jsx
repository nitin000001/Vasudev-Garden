import React, { useState } from "react";
import { GrStatusGood } from "react-icons/gr";

export default function FloorPlan() {
  const [selectedPlan, setSelectedPlan] = useState("1BHK");

  const floorPlans = {
    "1BHK": [
      {
        carpetArea: "350 sq.ft",
        price: "Price on Request",
        image:
          "https://img.freepik.com/free-vector/silhouette-skyline-illustration_53876-78786.jpg?ga=GA1.1.393811516.1724773390&semt=ais_hybrid",
      },
    ],
    "2BHK": [
      {
        carpetArea: "435 sq.ft",
        price: "Price on Request",
        image:
          "https://img.freepik.com/free-vector/city-architecture-apartment-building-block-with-tower-skyscraper-linear-sketch-vector-illustration_98292-1035.jpg?ga=GA1.1.393811516.1724773390&semt=ais_hybrid",
      },
      {
        carpetArea: "464 sq.ft",
        price: "Price on Request",
        image:
          "https://img.freepik.com/free-psd/detailed-illustration-new-york-city-skyline-transparent-background_84443-27038.jpg?ga=GA1.1.393811516.1724773390&semt=ais_hybrid",
      },
    ],
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* <h1 className="text-xl font-semibold mb-4">Price & Floor Plan</h1> */}
      <h1 id="PricePlans" className="text-3xl font-extrabold mb-6">
        Price and Floor Plans
      </h1>
      <div className="flex space-x-2 mb-4 ">
        <button
          className={`px-4 py-2 rounded-md border  ${
            selectedPlan === "1BHK" ? "bg-purple-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedPlan("1BHK")}
        >
          1 BHK
        </button>
        <button
          className={`px-4 py-2 rounded-md border ${
            selectedPlan === "2BHK" ? "bg-purple-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedPlan("2BHK")}
        >
          2 BHK
        </button>
      </div>
      <div className="grid  gap-4">
        {floorPlans[selectedPlan].map((plan, index) => (
          <div
            key={index}
            className="border relative rounded-md p-4 shadow-md bg-white flex flex-col items-center"
          >
            <span className="absolute flex gap-1 items-center left-7 top-5">
              {" "}
              <GrStatusGood />
              RERA
            </span>
            <img
              src={plan.image}
              alt={`${selectedPlan} Plan ${index + 1}`}
              className="w-full h-40 object-contain mb-4 bg-gray-100"
            />
            <p className="text-sm font-medium">
              Carpet Area: {plan.carpetArea}
            </p>
            <p className="text-sm text-gray-600">Price: {plan.price}</p>

            <a
              href="https://wa.me/7770017997"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md"
            >
              Contact
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
