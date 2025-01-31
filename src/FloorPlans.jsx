// import floorPlan from "./assets/floorPlan.jpg";
// import masterLayout from "../assets/masterplan.jpg";
import masterLayout from "./assets/masterplan.jpg"

const FloorPlans = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Image Container */}
      <div
        id="MasterLayout"
        className="text-3xl font-extrabold mb-6 mt-9 scroll-mt-20" // Add scroll offset
      >
        <h1 className="mt-5 mb-5">Master Layout</h1>
        <img
          src={masterLayout}
          alt="Master Layout"
          className="w-full max-h-[700px] object-contain border rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default FloorPlans;
