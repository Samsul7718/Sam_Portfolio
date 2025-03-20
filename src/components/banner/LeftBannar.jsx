import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const numBalls = 10; // Number of floating balls
const circleRadius = 80; // Radius for gathering in circle
const gatherTime = 8000; // Time before gathering (in ms)

const LeftBannar = () => {
  const [balls, setBalls] = useState(
    Array.from({ length: numBalls }, (_, i) => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      z: window.innerHeight / 4,
      delay: i * 0.1, // Delay effect for smoother movement
    }))
  );

  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    z: window.innerHeight / 4,
  });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMoving(false), gatherTime);
    return () => clearTimeout(timeout);
  }, [mouse]);

  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY, z: e.clientY });
    setIsMoving(true);
  };

  const [text] = useTypewriter({
    words: ["Coder.", "Web Developer.", "Front-end Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full flex flex-col gap-20" onMouseMove={handleMouseMove}>
      {/* Floating Balls */}
      {balls.map((ball, index) => {
        const angle = (index / numBalls) * Math.PI * 2; // Angle for circle formation
        const targetX = isMoving
          ? mouse.x
          : window.innerWidth / 2 + circleRadius * Math.cos(angle);
        const targetY = isMoving
          ? mouse.y
          : window.innerHeight / 2 + circleRadius * Math.sin(angle);
        const targetz = isMoving
          ? mouse.z
          : window.innerHeight / 2 + circleRadius * Math.tan(angle);

        return (
          <motion.div
            key={index}
            className="absolute w-10 h-10 bg-blue-500 rounded-full shadow-lg"
            animate={{ x: targetX, y: targetY, z: targetz }}
            transition={{
              ease: "easeOut",
              duration: 0.8,
              delay: ball.delay,
            }}
          />
        );
      })}

      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I,m{" "}
          <span className="text-designColor capitalize">samsul alam</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Proficient front-end developer with a passion for immersive digital
          experiences and a solid foundation in HTML, CSS, JavaScript, React,
          Redux, and Nodejs. Committed to staying updated and collaborating with
          talented teams to bring innovative ideas to life, I contribute
          creatively with dedication and attention to detail,making a meaningful
          impact in front-end development.
        </p>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best Skill On
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <IoLogoJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBannar;
