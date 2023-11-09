import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <nav className="fixed rounded-b-lg bg-zinc-900 z-10 sm:block md:hidden py-1 w-[99%]">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-semibold flex"> 
        <div className="relative w-7 h-7 overflow-hidden flex rounded-xl">
        <span className="absolute w-4 h-4 -top-1 -right-1 bg-green-500 rounded-md rotate-45" />
        <span className="absolute w-4 h-4 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45" />
        <span className="absolute w-4 h-4 -bottom-1 -left-1 bg-blue-600 rounded-md rotate-45" />
        <span className="absolute w-2 h-2 rounded-full bg-zinc-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="inline-flex text-lg px-3  font-semibold text-white">
      Zoxean Cares
         </div>
   </div>
        <button
          className=" text-blue-500 mr-3 font-extrabold text-2xl focus:outline-none md:hidden"
          onClick={toggleNavbar}
        >...
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>
      <div className={isOpen ? "block" : "hidden"}>
        <ul className="mt-4">
          <li className="mb-2">
            <Link
              to="/"
              className="text-white hover:text-blue-400 text-lg block"
            >
              Home
            </Link>
          </li>
          <li className="mb-2">
            <a
              href="#about"
              className="text-white hover:text-blue-400 text-lg block"
            >
              About
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#team"
              className="text-white hover:text-blue-400 text-lg block"
            >
              Services
            </a>
          </li>
          <li className="mb-2">
            <Link
              to="contact"
              className="text-white hover:text-blue-400 text-lg block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  
    );
};

export default MobileNavbar;