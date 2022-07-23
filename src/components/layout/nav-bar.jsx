import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const url = window.location.href;
  const loc = url === "http://shaqayeq.com/" ? "home" : "/";

  const navHandler = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-black"
          : "fixed w-full h-20 z-[10] bg-transparent text-[#ccc]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link to={loc}>
          <div className="text-[#f1550d] font-bold text-2xl uppercase lg:ml-16 cursor-pointer ">
            Portfolio.
          </div>
        </Link>
        <div>
          <ul className="hidden md:flex z-[100] text-[##ccc]">
            {loc !== "/" && (
              <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-[#f1550d]">
                <Link to={loc}>Home</Link>
              </li>
            )}
            {loc === "/" && (
              <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-[#f1550d]">
                <NavLink to={loc}>Home</NavLink>
              </li>
            )}
            <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-[#f1550d]">
              <Link to="about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-[#f1550d]">
              <Link to="skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-[#f1550d]">
              <Link to="projects">Projects</Link>
            </li>

            <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-[#f1550d]">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={navHandler} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        onClick={navHandler}
        className={
          nav
            ? "md:hidden text-[#ccc] fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[60%] sm:w-[60%] md:w-[45%] h-screen bg-[#080808] p-12 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-700"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between cursor-pointer">
              <NavLink to="/">
                <div className="block font-bold text-2xl uppercase lg:ml-16 cursor-pointer ">
                  Portfolio.
                </div>
              </NavLink>
              <div
                onClick={navHandler}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 mt-9"></div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link to="home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link to="about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link to="skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link to="projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>

              <Link to="contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm ">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#f1501a]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/shaqayeqboustanbakhsh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/shaqayeqbs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                {/* <a
                  href="https://github.com/fireclint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaInstagram />
                  </div>
                </a> */}
                <Link to="/contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
