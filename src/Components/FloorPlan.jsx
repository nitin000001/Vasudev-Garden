import React, { useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import OneBHK317 from "../assets/1BHK 317 sq ft carpet.jpg"
import OneBHK336 from "../assets/1BHK 336 sq ft carpet.jpg"
import OneBHK37951 from "../assets/1BHK 379.51 sqft carpet.jpg"
import OneBHK39364 from "../assets/1BHK 393.64 sq ft carpet.jpg"
import OneBHK39881 from "../assets/1BHK 398.81 sq ft carpet.jpg"
import OneBHK40785 from "../assets/1BHK 407.85 sqft carpet.jpg"
import OneBHK39751 from "../assets/397.51 sq ft carpet 1BHK.jpg"

export default function FloorPlan() {
  const [selectedPlan, setSelectedPlan] = useState("1BHK");

  const floorPlans = {
    "1RK": [
      {
        carpetArea: "350 sq.ft",
        price: "Price on Request",
        image:
          "https://img.freepik.com/free-vector/silhouette-skyline-illustration_53876-78786.jpg?ga=GA1.1.393811516.1724773390&semt=ais_hybrid",
      },
    ],
    "1BHK": [
      {
        carpetArea: "317 sq.ft",
        price: "Price on Request",
        image: OneBHK317,
      },
      {
        carpetArea: "336 sq.ft",
        price: "Price on Request",
        image: OneBHK336,
      },
      {
        carpetArea: "379.51 sq.ft",
        price: "Price on Request",
        image: OneBHK37951,
      },
      {
        carpetArea: "393.64 sq.ft",
        price: "Price on Request",
        image: OneBHK39364,
      },
      {
        carpetArea: "398.81 sq.ft",
        price: "Price on Request",
        image: OneBHK39881,
      },
      {
        carpetArea: "407.85 sq.ft",
        price: "Price on Request",
        image: OneBHK40785,
      },
      {
        carpetArea: "397.51 sq.ft",
        price: "Price on Request",
        image: OneBHK39751,
      },
    ],
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* <h1 className="text-xl font-semibold mb-4">Price & Floor Plan</h1> */}
      <h1 id="PricePlans" className="text-3xl font-extrabold mb-6">
        Price and Floor Plans
      </h1>
      <div className="flex space-x-2 mb-4 ">
        <button
          className={`px-4 py-2 rounded-md border cursor-pointer ${
            selectedPlan === "1RK" ? "bg-purple-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedPlan("1RK")}
        >
         1RK
        </button>
        <button
          className={`px-4 py-2 rounded-md border cursor-pointer ${
            selectedPlan === "1BHK" ? "bg-purple-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedPlan("1BHK")}
        >
          1 BHK
        </button>
      </div>
      <div className="grid md:grid-cols-3  gap-4">
        {floorPlans[selectedPlan].map((plan, index) => (
          <div
            key={index}
            className="border relative rounded-md p-4 shadow-md bg-white flex flex-col items-center"
          >
            <span className="absolute flex gap-1 items-center left-5 top-2 text-green-500">
              {" "}
              <GrStatusGood />
              RERA
            </span>
            <img
              src={plan.image}
              alt={`${selectedPlan} Plan ${index + 1}`}
              className="w-full h-96 object-contain mb-4 p-4 bg-gray-100"
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
