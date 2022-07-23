import React from "react";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element name="skills">
      <div id="skills" className="w-full lg:h-screen p-2 bg-[#1b1b1b] py-24 ">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
          <p className="text-xl text-center tracking-widest uppercase text-[#e57b51] m-10 mb-0 xl:m-0 pb-20">
            technical Skills
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-[#e6e5e4] bg-[#141414] rounded-md shadow-sm shadow-[#2e2d30] mx-10 p-6 xl:mx-0 md:p-20 border-b-2 border-r-2 border-[#427af1]">
            <div className="p-6  hover:scale-105 ease-in duration-300 ">
              <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                  <img
                    src="/images/skills/html.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6  hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="/images/skills/css.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6  hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="/images/skills/javascript.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className="p-6 hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="/images/skills/react.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className="p-6 hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="/images/skills/tailwind.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            <div className="p-6 hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="/images/skills/firebase.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
            <div className="p-6 hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src="/images/skills/github1.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Github</h3>
                </div>
              </div>
            </div>
            <div className="p-6  hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto ">
                  <img
                    src="/images/skills/nextjs.png"
                    width="64px"
                    height="64px"
                    alt="/"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Next</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Skills;
