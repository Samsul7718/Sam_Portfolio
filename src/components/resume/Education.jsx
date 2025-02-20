import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2012-2018</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div
          className="w-full mt-14 h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Front-end-developer"
            subTitle="CODING NINJA (2022-2023)"
            result="React"
            des="I learned the coding language java then i move forword to HTML,CSS,JS,React.Apart from 
            this i made some project.Now I'm upgrading my self."
          />
          <ResumeCard
            title="Bachelor of Engineering in Civil"
            subTitle="JNTUH (2014-2018)"
            result="NON-IT"
            des="Farah Institution of Technology 2014 – 2018 Engineering Hyderabad,Telengana"
          />

          <ResumeCard
            title="Higher Secondary "
            subTitle="WBBHSE (2012-2014)"
            result="SCIENCE"
            des="Madhaipur Pallimangal Vidyalaya, I completed my Higher-Secondary educatuion in science"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022-2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div
          className="w-full mt-14 h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10"
        >
          <ResumeCard
            title="Front-end Developer"
            subTitle="The Entrepreneurship Network (July 2024 - Oct 2024)"
            result="Remote"
            des="I worked as a frontend developer in different project.I build a team and worked in a 
            group in Decodage project and TEN MENTOR (React)"
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Oasis Infobyte (Oct 2023 - Nov 2023)"
            result="Remote"
            des="I successfully completed my frontend web development internship with project.
               Skills: JavaScript · Front-End Development · Cascading Style Sheets (CSS) · HTML"
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Self-Learning (2022-2024)"
            result="India"
            des="I learned the coding language java then i move forword to HTML,CSS,JS,React.Apart from
             this i made some project.Now I'm upgrading my self."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
