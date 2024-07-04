import React from "react";
import BGimage from "../Assests/div.jpg";
import CheckIMG from "../Assests/check.png";

const Habot = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[1316px] md:w-[80%] h-[623px] bg-customBlue flex justify-center items-center rounded-[5px]">
        <div className="flex flex-col md:flex-row justify-between text-center bg-yellow w-full md:w-90 h-90 md:h-auto mt-8 md:mt-0 md:ml-12 md:mr-12">
          <img
            className="w-full md:w-[640px] h-auto md:h-[350px] object-cover"
            src={BGimage}
            alt="Background"
          />
          <div className="text-center p-4 md:p-8">
            <h1 className="relative inline-block pb-1 text-[26px] text-red-500 font-bold leading-[47px]">
              Buyer
              <span className="absolute bottom-0 left-1/2 right-0 mx-auto w-[202px] h-[4px] bg-red-500 transform -translate-x-1/2"></span>
            </h1>

            <div className="mt-4 space-y-4 flex flex-col md:w-[461px]">
              <div className="flex items-center">
                <img src={CheckIMG} alt="check" className="w-5 h-5" />
                <p className="text-[19px] text-white pl-2">
                  Post your requirements.
                </p>
              </div>
              <div className="flex items-center">
                <img src={CheckIMG} alt="check" className="w-5 h-5" />
                <p className="text-[19px] text-white pl-2">
                  Sit back for multiple suppliers to contact you.
                </p>
              </div>
              <div className="flex items-center">
                <img src={CheckIMG} alt="check" className="w-5 h-5 mt-1" />
                <p className="text-[19px] text-white pl-2">
                  Choose among the suppliers based on the ratings and reviews.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center p-4 text-[26px] font-bold leading-[32px] text-white">
            <h1>Supplier</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habot;
