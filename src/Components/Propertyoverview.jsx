import React, { useState } from "react";

const Propertyoverview = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const places = [
    {
      imgSrc:
        "https://images.creativefabrica.com/products/previews/2024/03/26/zVSn0mu5G/2eFLKE5QtTP0Gub55MmWGewJs4J-mobile.jpg",
      category: "School",
      name: "St.Francis High School",
      time: "2 mins",
      distance: "(1.5km)",
    },
    {
      imgSrc:
        "https://images.creativefabrica.com/products/previews/2023/11/29/y6PHhbpYv/2Yqq90zN3cO6v8NtcOZEgYFoYrF-mobile.jpg",
      category: "Hospital",
      name: "Silver Line Hospital",
      time: "2 mins",
      distance: "(1.5km)",
    },
    {
      imgSrc:
        "https://images.creativefabrica.com/products/previews/2024/02/13/vqNNmEdbg/2cJnFeRNDTIo8YLqJJNnjnMiiEP-mobile.jpg",
      category: "Railway Station",
      name: "Dahisar Station",
      time: "2 mins",
      distance: "(100m)",
    },
    {
      imgSrc:
        "https://images.creativefabrica.com/products/previews/2024/01/18/1yaGW1mT6/2b8Hjbfqkpj8OBPo2E4UOYDbzQx-mobile.jpg",
      category: "Airport",
      name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
      time: "2 mins",
      distance: "(1.5km)",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 mb-9">
        <div className="bg-gray-600 mb-9 text-white p-4 border-5 border-[#B9F0DB]">
          <p>Why Vasudev Garden?</p>
          <li>2 Min Away Railway Station</li>
          <li>Domestic Airport 3km</li>
          <li>International Airport 30km</li>
        </div>

        <div className="container border-2 border-gray-300 p-5">
          <div className="topontent flex gap-2">
            <img
              src="https://c.housingcdn.com/demand/s/client/common/assets/viewOnMap.3e01b667.svg"
              alt=""
            />
            <div className="">
              <p>Property Location</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Laxminarayan CHSL, Mhatre Wadi , Dahisar West Mumbai 400068
              </p>
            </div>
          </div>

          <div className="bottomontent">
            <h3>Around This Project</h3>
            <div className="imgContainer  flex gap-9 overflow-x-auto bg-white p-7">
              <div className="flex flex-nowrap w-full">
                {places.concat(places).map((place, index) => (
                  <div
                    key={index}
                    className="flex items-end gap-4 p-5 mr-3 bg-gray-800 flex-shrink-0"
                  >
                    <img
                      className="w-16 h-16"
                      src={place.imgSrc}
                      alt={place.name}
                    />
                    <div className="text-white">
                      <p>{place.category}</p>
                      <p>{place.name}</p>
                    </div>
                    <div className="text-white flex flex-col">
                      <span>{place.time}</span>
                      <span>{place.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propertyoverview;
