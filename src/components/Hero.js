import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">Z</span>oAlfakar <br />
            An aspiring MERN stack developer
          </h1>

          <p className="py-5 mb-5">
            I'm fully dedicated to achieve my goal of working as a web
            developer.
          </p>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent">
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
