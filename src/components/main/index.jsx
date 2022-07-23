import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div
      id="home"
      className="flex justify-between text-center bg-[#0a0a0a]  "
    >
      <div className="opacity-90 blur w-full absolute md:h-[50rem]">
        <img
          src="/images/back4.jpg"
          alt="/"
          className="md:h-[52.5rem]  md:w-[100%] "
        />
      </div>
      <div className="max-w-[600px] w-[30rem]  mx-auto p-2  blur-none mt-24">
        <div className="static inline-block  items-center z-10 border-[20px] border-[#f1550d]/[.25] rounded-full">
          <div className="border-[6px]  border-[#f1550d] blur-none static overflow-hidden  rounded-full md:w-[23rem] md:h-[23rem]">
            <img src="/images/back3.jpg" alt="/" className="w-[90%]" />
          </div>
        </div>

        <div className="bg-[#131212] relative  pt-48 mt-[-12rem] mb-12  -z-10 rounded-mx">
          <h1 className="py-2 pt-6 text-[#ccc] text-4xl">
            Hi, I&#39;m <span className="text-[#ccc]">Shaqayeq</span>
          </h1>
          <h1 className="py-2 text-[#8f8f8f] text-2xl  pb-6">
            A React Developer
          </h1>

          <div className="flex items-center text-[#c5c5c5] justify-between max-w-[330px] pb-12 m-auto py-4 ">
            <a
              href="https://www.linkedin.com/in/shaqayeqboustanbakhsh/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/shaqayeqbs"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link to="contact">
              <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
