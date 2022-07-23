import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Link, Element } from "react-scroll";

const Contact = () => {
  const handleSubmit = () => {};

  return (
    <Element name="contact">
      <div id="contact" className="overflow-x-auto  w-full lg:h-screen ">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full  ">
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-800 bg-black rounded-xl lg:p-4">
            <p className="text-xl tracking-widest uppercase text-[#ff6f43] text-center py-10">
              Contact With Me
            </p>
            <div className="p-4">
              <form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                action="https://getform.io/f/96ea6d05-2dc1-4bab-baab-dd881e576fb1"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 ">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-600 h-10 bg-transparent"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-600 h-10 bg-transparent"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-600 h-10 bg-transparent"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-600 h-10 bg-transparent"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 ">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-600  bg-transparent"
                    rows="4"
                    name="message"
                  ></textarea>
                </div>
                <button
                  className="w-full p-4 text-gray-100 mt-4 shadow-md shadow-gray-800 rounded-xl uppercase bg-gradient-to-r from-[#f04419] to-[#ff8d4b] my-4"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link to="home">
            <div className="rounded-full shadow-md shadow-gray-800 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
