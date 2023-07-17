import React from "react";
import AboutImg from "../assets/about-img.png";
const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is ZoAlfakar Salman. I am a Mechatronics Engineer
            graduated from Tishreen University and currently studying for a
            master degree in web technologies at Syrian Virtual University.
          </p>
          <p className="pb-5">
            I have decent skills in React.js, CSS3, Tailwind CSS.
          </p>

          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose.</p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
