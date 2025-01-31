import React from "react";

const GoogleMap = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Location</h1>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15058.530183775145!2d72.81160013596362!3d19.34174495744848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae6f2c99d7e1%3A0x5b7fe8549cc6b9f2!2sNaigaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1738214104826!5m2!1sen!2sin"
          className="w-full h-[400px] border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
