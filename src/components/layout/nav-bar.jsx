import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { DiJqueryLogo } from "react-icons/di";
import { NavLink } from "react-router-dom";
import CartBtn from "./CartBtn";
import Cart from "../Cart/Cart";
function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown((prev) => !prev);
  };

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
          ? "fixed top-0 w-full h-20 shadow-xl z-[100] ease-in-out duration-300 bg-black text-white"
          : "fixed top-0 w-full h-20 z-[10] bg-transparent text-[#1a1a1a] font-bold border-2"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <NavLink to="/">
          <div className="text-[#f1550d] font-bold text-5xl uppercase lg:ml-16 cursor-pointer ">
            <DiJqueryLogo />
          </div>
        </NavLink>
        <div>
          <ul className="hidden md:flex z-[100] text-[##ccc]">
            <li className="ml-10 mt-2 text-sm uppercase hover:border-b-2 hover:border-[#f1550d]">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-[#f1550d]">
              <CartBtn onShow={showCartHandler} />
            </li>
          </ul>
          {cartIsShown && <Cart onClose={showCartHandler} />}
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
            ? "md:hidden text-[#ccc] fixed left-0 top-0 w-full h-screen bg-blue/70"
            : "h-screen"
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[60%] sm:w-[60%] md:w-[45%] h-screen bg-[#080808] p-12 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-700"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between cursor-pointer">
              <NavLink to="/">
                <div className="block font-bold text-5xl uppercase lg:ml-16 cursor-pointer ">
                  <DiJqueryLogo />
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
              <NavLink to="/about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
                <li>
                  <li>
                    <CartBtn />
                  </li>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
