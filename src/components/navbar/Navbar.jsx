import React, { useState } from "react";
import { logo } from "../../assets/index";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className="w-full h-20 px-4 sm:px-6 lg:px-16 bg-bodyColor flex justify-between items-center 
    shadow-md font-titleFont border-b-[1px] border-b-gray-600 fixed top-0 left-0 right-0 z-50"
    >
      <div className="flex-shrink-0">
        <img className="h-16 w-16 rounded-full" src={logo} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinksdata.map(({ _id, title, link }) => (
          <li
            key={_id}
            className="text-base text-gray-400 hover:text-designColor duration-300 cursor-pointer"
          >
            <Link
              to={link}
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-400 p-2 rounded-lg hover:bg-gray-800 transition-colors"
        aria-label="Toggle Menu"
      >
        {menuOpen ? (
          <IoCloseOutline className="w-7 h-7" />
        ) : (
          <FiMenu className="w-7 h-7" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-bodyColor shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8 p-4">
          {navLinksdata.map(({ _id, title, link }) => (
            <Link
              key={_id}
              to={link}
              smooth={true}
              spy={true}
              duration={500}
              offset={-70}
              className="text-lg text-gray-400 hover:text-designColor duration-300 w-full text-center py-2"
              onClick={() => setMenuOpen(false)}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/* <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                to={link}
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div> */
