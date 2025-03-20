import React from "react";
import { logo } from "../../assets";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="h-20 w-20 rounded-full" src={logo} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/samsul-alam-427a0a19a/">
              <FaLinkedin />
            </a>
          </span>
          <span className="bannerIcon">
            <a href=" https://www.instagram.com/samsul1934/">
              <FaInstagramSquare />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://twitter.com/samsula32423150">
              <FaSquareXTwitter />
            </a>
          </span>
        </div>
      </div>
      <div className="w-full h-full ">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              About{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <a href="https://sam-portfolio-zeta.vercel.app/">
              <span
                className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
              >
                Portfolio{" "}
                <span
                  className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
                ></span>
              </span>
            </a>
          </li>
          {/* <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              Services{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li> */}
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              Blog{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              Contact{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full ">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Resources
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              Authentication{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              System Status{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              Terms of Service{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          {/* <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              Pricing{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li> */}
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              Our Right{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full ">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Developers
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              Documentation{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              Authentication{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              API Refrence{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              Support{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li>
          {/* <li>
            <span
              className="w-full text-lg hover:text-designColor duration-300 cursor-pointer 
            relative group"
            >
              Open Resource{" "}
              <span
                className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0
              -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"
              ></span>
            </span>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
