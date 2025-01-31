import React from "react";
import ShareButton from "./ShareButton";
import { FcAreaChart } from "react-icons/fc";
import { SlSizeActual } from "react-icons/sl";
import { GiResize } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { MdOutlinePriceCheck } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FcDataConfiguration } from "react-icons/fc";
import { FaRegIdCard } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";

const DownloadBrochure = () => {
  const data = [
    {
      key: "Project Area",
      value: " 0.60 acres",
      icons: <FcAreaChart />,
    },
    {
      key: "Sizes",
      value: "389.74 - 665.94 sq ft",
      icons: <SlSizeActual />,
    },
    {
      key: "Project Size",
      value: "1 Building - 72 units",
      icons: <GiResize />,
    },
    {
      key: "Launch Date",
      value: "Oct 2024",
      icons: <MdDateRange />,
    },
    {
      key: "Avg. Price",
      value: "24K/sq ft ",
      icons: <MdOutlinePriceCheck />,
    },
    {
      key: "Possession Starts",
      value: "Dec, 2026",
      icons: <GiPositionMarker />,
    },
    {
      key: "Configurations",
      value: "1, 2 BHK Apartments ",
      icons: <FcDataConfiguration />,
    },
    {
      key: "Rera Id",
      value: "PR1180002400063",
      icons: <FaRegIdCard />,
    },
    {
      key: "Check RERA Status",
      value: "https://wa.me/7770017997",
      icons: <GrStatusGood />,
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-9">
        <div className="border p-9">
          {/* Header Section */}
          <div className="border-b-2 pb-5 flex items-center justify-between flex-wrap">
            <p className="font-bold text-2xl">Property Overview</p>

            <a
              href="https://wa.me/7770017997"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-2 sm:mt-0 cursor-pointer hover:underline"
            >
              Download Brochure
            </a>
          </div>
          {/* Data Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center text-2xl">
                  {item.icons}
                </div>
                <div>
                  <p className="font-medium text-gray-700">{item.key}</p>
                  {item.key === "Check RERA Status" ? (
                    <a
                      href={item.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-sm underline"
                    >
                      Contact on WhatsApp
                    </a>
                  ) : (
                    <p className="text-gray-500 text-sm">
                      {item.value || "N/A"}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Button Section */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <ShareButton />

            <a
              href="https://wa.me/7770017997"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-6 py-3 w-full sm:w-auto text-center hover:bg-blue-700 cursor-pointer text-white rounded inline-block"
            >
              Ask for details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBrochure;
