import React from "react";
import img1 from "../Assests/1.png";
import img2 from "../Assests/2.png";
import img3 from "../Assests/3.png";
import img4 from "../Assests/4.png";
import img5 from "../Assests/5.png";
import img6 from "../Assests/6.png";
import "./components.css";

const HowItWorks = () => {
  return (
    <div className="w-full py-10 px-6 md:px-20 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
          How it works?
        </h1>
        <p className="text-sm md:text-base text-gray-700">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#E8FBFF] flex flex-col items-center p-6 rounded-lg shadow-md">
          <img className="w-20 h-20 mb-4" src={img1} alt="Select Role" />
          <p className="text-lg font-semibold text-black text-center">
            Select Your Role and Sign Up
          </p>
        </div>
        <div className="bg-white flex flex-col items-center p-6 rounded-lg shadow-md">
          <img className="w-20 h-20 mb-4" src={img2} alt="Post Requirement" />
          <p className="text-lg font-semibold text-black text-center">
            Buyers Post Your Requirements
          </p>
        </div>
        <div className="bg-[#E8FBFF] flex flex-col items-center p-6 rounded-lg shadow-md">
          <img className="w-20 h-20 mb-4" src={img3} alt="Review Supplier" />
          <p className="text-lg font-semibold text-black text-center">
            Review, Select, and Contact the Best Supplier
          </p>
        </div>
        <div className="bg-[#E8FBFF] flex flex-col items-center p-6 rounded-lg shadow-md">
          <img className="w-20 h-20 mb-4" src={img4} alt="Contact Buyer" />
          <p className="text-lg font-semibold text-black text-center">
            Contact Buyers and Share Your Quote
          </p>
        </div>
        <div className="bg-[#E8FBFF] flex flex-col items-center p-6 rounded-lg shadow-md">
          <img className="w-20 h-20 mb-4" src={img5} alt="Contact Buyer" />
          <p className="text-lg font-semibold text-black text-center">
            Contact Buyers and Share Your Quote
          </p>
        </div>
        <div className="bg-white flex flex-col items-center p-6 rounded-lg shadow-md">
          <img
            className="w-20 h-20 mb-4"
            src={img6}
            alt="Connect and Feedback"
          />
          <p className="text-lg font-semibold text-black text-center">
            Both Parties Connect and Leave Feedback
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
