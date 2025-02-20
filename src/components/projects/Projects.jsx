import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "../projects/ProjectsCard";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid gap-14 grid-cols-3">
        <ProjectCard
          title="React Portfolio"
          des="A modern, fully responsive portfolio website built with React and Tailwind CSS. Features include 
          smooth animations, dynamic project showcase, and a contact form integration."
          src={projectOne}
          github=""
          demo=""
        />
        <ProjectCard
          title="Weather App"
          des="A real-time weather application built with React and OpenWeather API. Displays current weather 
          conditions, temperature, and forecasts for any location with a clean, responsive UI."
          src={projectTwo}
          github="https://github.com/Samsul7718/weather-app.git"
          demo="https://samsul7718-weather-app.netlify.app/"
        />
        <ProjectCard
          title="React Calculator"
          des="A simple and interactive calculator built with React. Supports basic arithmetic operations, 
          keyboard input, and a sleek, responsive design for all devices."
          src={projectThree}
          github="https://github.com/Samsul7718/react-calculator-app.git"
          demo="https://react-calculator-app1.netlify.app/"
        />
        <ProjectCard
          title="Today's Target"
          des="A simple and efficient task management app built with React. Allows users to set daily goals, 
          track progress, and stay organized with an intuitive interface."
          src={projectFour}
          github="https://github.com/Samsul7718/Today-s-task.git"
          demo="https://today-target.netlify.app/"
        />
        <ProjectCard
          title="React Task Tracker"
          des="A user-friendly task management app built with React. Features include adding, editing, deleting
           tasks, and marking them as completed, with a clean and responsive UI."
          src={projectFive}
          github="https://github.com/Samsul7718/react-task-tracker.git"
          demo="https://react-task-tracker12.netlify.app/"
        />
        <ProjectCard
          title="IMDB Clone"
          des="A movie database web app inspired by IMDB, built with React. Features include real-time movie 
          search, detailed information fetched from an API, and a responsive design."
          src={projectSix}
          github="https://github.com/Samsul7718/IMDB-Clone-samsul.github.io.git"
          demo="https://indb-clone-samsul.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
