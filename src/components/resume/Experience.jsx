import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Design Experience </h2>
        </div>
        <div
          className="w-full mt-14 h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Photoshot skill "
            subTitle="SELF-IMAGE (2018-2022)"
            result="5.4/10"
            des="I learned photoshot for self photography and selfies, and trying to modify the image quality by own."
          />
          <ResumeCard
            title="Figma design"
            subTitle="self-learning (2024)"
            result="3.9/10"
            des="I am trying to improve my figma design to build the proper development skill from yt and doc"
          />
          <ResumeCard
            title="Canva skill"
            subTitle="self learning (2024-25)"
            result="4.5/10"
            des="I learne d the canva design skill for my own social media post. to get more audience to engaged my skill."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Development Experience</h2>
        </div>
        <div
          className="w-full mt-14 h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Portfolio project"
            subTitle="Trying to explore my skill (2025-Present)"
            result="React"
            des="Trying to build a proper designing and engaging protfolio to introduce my skills to the others."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Deep learning with js (2023-Prsent)"
            result="JavaScript"
            des="Learning the basic of js and the fundamental things and trying to explore the advance topic"
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="still learning (2023-Present)"
            result="CSS"
            des="Css is very vust syllabus to learn.Trying little thing step-by-step"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
