import React from 'react'

const PriceAndFloorPlans = () => {
  return (
    <div>
        <div className="flex flex-col sm:flex-row justify-between p-4 md:flex-row space-y-4 sm:space-y-0">
          <div className="flex flex-col items-center sm:border-r-2 border-gray-700 sm:pr-4">
            <p>1RK & 1BHK Apartment </p>
            <p>Configurations</p>
          </div>
          <div className="flex flex-col items-center sm:border-r-2 border-gray-700 sm:pr-4">
            <p>Dec, 2027</p>
            <p>Possession </p>
          </div>
          <div className="flex flex-col items-center sm:border-r-2 border-gray-700 sm:pr-4">
            <p>₹ 9.37k/sq ft</p>
            <p>Avg. Price</p>
          </div>
          <div className="flex flex-col items-center">
            <p>248.11 - 407.85 sq ft</p>
            <p>(Carpet Area) Sizes</p>
          </div>
        </div>
    </div>
  )
}

export default PriceAndFloorPlans
