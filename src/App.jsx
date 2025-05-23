import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import PropertyContent from './Components/PropertyContent'
import Propertyoverview from './Components/Propertyoverview'
import DownloadBrochure from './Components/DownloadBrochure'
import CustomerForm from './Components/CustomerForm'
import Footer from './Components/Footer'
import ProjectAmenities from './Components/ProjectAmenities'
import GoogleMap from './Components/GoogleMap'
import FloorPlan from './Components/FloorPlan'


const App = () => {
  return (
    <div className='bg-gray-800 text-white' >
      <Navbar />
      <HeroSection />
      <PropertyContent />
      <DownloadBrochure />
      <FloorPlan />
      <ProjectAmenities />
      <Propertyoverview />
      <GoogleMap />
      <CustomerForm />
      <Footer />
    </div>
  )
}

export default App