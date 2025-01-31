import React from "react";

const ShareButton = () => {
  const handleShare = async () => {
    const shareData = {
      title: "DPS Sanctum",
      text: "Check out this amazing website!",
      url: "https://dps-sanctum.vercel.app", // Replace with your website URL
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Website shared successfully!");
      } catch (error) {
        console.error("Error sharing the website:", error);
      }
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="bg-blue-600 px-6 py-3 w-full sm:w-auto text-center hover:bg-blue-700 cursor-pointer text-white rounded"
    >
      Share
    </button>
  );
};

export default ShareButton;
