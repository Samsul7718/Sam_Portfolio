import React from "react";
import { contactImg } from "../../assets";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactLeft = () => {
  return (
    <div
      className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne
                    p-8 rounded-lg  flex flex-col gap-8 justify-center"
    >
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Samsul Alam</h3>
        <p className="text-lg font-normal text-gray-400">Front-End-Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur cupiditate explicabo veniam
          molestias laudantium soluta qui omnis! Quod.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8167786956</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">samsul7718@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
};

export default ContactLeft;
