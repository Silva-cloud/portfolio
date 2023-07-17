import React from "react";
import StartUpLandingPage from "../assets/StartUpLandingPage.png";
import facerecognitionbrain from "../assets/facerecognitionbrain.png";
import robots from "../assets/robots.png";
import recruitmentApp from "../assets/recruitmentApp.PNG";

const Projects = () => {
  const projects = [
    {
      img: recruitmentApp,
      title: "recruitment app",
      desc: "The home page of a recruiting company, Built using React,Tailwindcss, Framer motion",
      live: "https://silva-cloud.github.io/recruitment-app/",
      code: "https://github.com/Silva-cloud/recruitment-app",
    },
    {
      img: robots,
      title: "robots",
      desc: "Funny little app to search a robo friend, Built using React,Vanilla CSS, RoboHash API",
      live: "https://silva-cloud.github.io/robots/",
      code: "https://github.com/Silva-cloud/robots",
    },
    {
      img: facerecognitionbrain,
      title: "face recognition app",
      desc: " An app that uses image recognition API to detect the face in a given image. Built with Express.js, postgress, React",
      live: "https://silva-cloud.github.io/facerecognitionbrain/",
      code: "https://github.com/Silva-cloud/facerecognitionbrain",
    },
    {
      img: StartUpLandingPage,
      title: "Start up landing page",
      desc: "Start up Landing page using Html and CSS",
      live: "https://silva-cloud.github.io/room/",
      code: "https://github.com/Silva-cloud/room",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold">
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold">
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
