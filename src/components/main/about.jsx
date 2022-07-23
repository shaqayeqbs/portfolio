import React from "react";
import Interested from "./interested";
import { Link, Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div id="about" className="overflow-auto w-  bg-[#030303]">
        <p className="uppercase text-xl text-center pt-20  text-[#fc8a55]  bg-[#030303]">
          About
        </p>

        <div className="flex-col items-center  py-16 mx-10">
          <div className="max-w-[1240px] m-auto mb-6">
            <div className="">
              <p className="pt-2 text-lg text-gray-400">
                I am a junior web developer with 1 years of experience in
                deploying websites . Strong creative and analytical skills. Team
                player with an eye for detail. In 2020 I started working with
                HTML and CSS to learn new skills. What I thought was just a few
                small skills turned into a love for programming.
              </p>
              <p className="pb-2 text-lg text-gray-400">
                interested in how intricate programming can be :) I was quickly
                drawn to learn more. I started learning javascript and making
                websites. I am now spending my time building projects with Next
                JS, Firebase,mongoDb and learning new technologies.
              </p>

              <Link to="projects">
                <p className="py-4 text-lg text-gray-400 underline cursor-pointer">
                  Check out some of my latest projects.
                </p>
              </Link>
            </div>
          </div>
          <div className="max-w-[1240px] m-auto ">
            <Interested />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
