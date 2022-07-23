import React from "react";

import { FaCoffee } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { GiGrandPiano } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";

const Interested = () => {
  return (
    <div className="bg-[#030303] md:pb-20 overflow-auto">
      <div className="flex space-x-96 pb-20">
        <div className="max-w-lg">
          <p className="uppercase text-llg  tracking-widest text-[#fc8a55] py-6 pb-16 ">
            Interested
          </p>

          <div className="flex  text-[#afaeae]  mx-auto ">
            <div className="rounded-lg text-center bg-[#1f1f1f]  mr-5 text-3xl px-6 py-3 hover:scale-110 ease-in duration-300">
              <div className="text-center mx-auto ml-1">
                {" "}
                <GiGrandPiano />
              </div>
              <p className="text-xs text-[#ccc]  pt-4">Piano</p>
            </div>
            <div className="rounded-lg text-center mr-5 bg-[#1f1f1f] mx-auto text-3xl px-6 py-3 hover:scale-110 ease-in duration-300">
              <div className="text-center mx-auto ml-1">
                <FaCoffee />
              </div>
              <p className="upper text-xs text-[#ccc] pt-4">Coffee</p>
            </div>
            <div className="rounded-lg text-center mr-5 bg-[#1f1f1f] mx-auto text-3xl px-6 py-3 hover:scale-110 ease-in duration-300">
              <div className="text-center mx-auto ml-1">
                <RiPlantFill />
              </div>
              <p className="upper text-xs text-[#ccc] pt-4">plants</p>
            </div>

            <div className="rounded-lg text-center mr-5 bg-[#1f1f1f] mx-auto text-3xl  px-6 py-3 hover:scale-110 ease-in duration-300">
              <div className="text-center mx-auto ml-1">
                <FcSportsMode />
              </div>
              <p className="upper text-xs text-[#ccc] pt-4">sport</p>
            </div>
          </div>
        </div>
        <div className="mb-20 hover:scale-105 ease-in duration-300   shadow-xl shadow-gray-900 rounded-xl flex ">
          <img
            src="/images/about.jpg"
            className="rounded-xl"
            height="250"
            width="410"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Interested;
