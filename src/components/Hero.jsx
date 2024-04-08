import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import css from "../assets/images/css.svg";
import express from "../assets/images/express.png";
import html from "../assets/images/html.svg";
import js from "../assets/images/js.svg";
import mongodb from "../assets/images/mongodb.png";
import node from "../assets/images/node-js.png";
import PfofileBg from "../assets/images/pfofile-bg2.jpg";
import react from "../assets/images/react.svg";
import tailwind from "../assets/images/tailwind.svg";
import WavingHand from "../assets/images/waving.png";

const Hero = () => {
  return (
    <section id="home" className="bg-[#f9f9f9]">
      <div className="container flex flex-col justify-center items-center max-w-[1000px] md:w-[96%] mx-auto px-5 lg:h-[calc(100vh-84px)] md:py-[70px] py-[50px] lg:py-[0]">
        <div className="content w-full">
          <div className="hero-main flex flex-col-reverse lg:flex-row text-center lg:text-left justify-between items-center">
            <div className="hero-text md:w-[550px]">
              <h1 className="md:text-[55px] text-[35px] font-bold leading-tight">
                Full Stack <br /> MERN Developer
                <img
                  className="md:h-[64px] h-[42px] w-auto inline ml-3"
                  src={WavingHand}
                  alt="waving hand"
                />
              </h1>
              <p className="my-6 text-lg text-gray-500">
                Hi, I am Ahsan Habib. A passionate Full Stack MERN Developer
                from Barishal, Bangladesh 📍
              </p>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/sheikh-ahsan-habib-arman-bb874920b/"
                  target="blank"
                >
                  <FaLinkedin className="inline-block text-3xl mr-3 transition hover:text-[#0072b1]" />
                </a>
                <a href="https://github.com/armanahsanhabib" target="blank">
                  <FaGithub className="inline-block text-3xl transition hover:text-[#171515]" />
                </a>
                {/* <a href="https://www.youtube.com/@armanahsanhabib">
                                    <FaYoutube className='inline-block text-3xl mr-3 transition hover:text-[#c4302b]' />
                                </a> */}
              </div>
            </div>
            <div
              className="hero-img lg:w-[350px] w-[300px] lg:h-[350px] h-[300px] mb-[20px] lg:mb-0"
              style={{
                WebkitAnimation: "morph 8s ease-in-out infinite",
                animation: "morph 8s ease-in-out infinite",
                backgroundImage: `url(${PfofileBg})`,
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "3px solid #2d2e32",
                borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
                position: "relative",
                transition: "all 1s ease-in-out",
              }}
            ></div>
          </div>
          <div className="tech-stack flex lg:flex-row flex-col items-center mt-16">
            <h3
              className="text-xl font-bold mb-8 lg:mb-0"
              style={{
                position: "relative",
              }}
            >
              Frontend Stack
              <span
                className="hidden lg:block"
                style={{
                  content: "",
                  position: "absolute",
                  width: "3px",
                  height: "100%",
                  backgroundColor: "#2d2e32",
                  top: "0",
                  left: "180px",
                }}
              ></span>
              <span
                className="block lg:hidden"
                style={{
                  content: "",
                  position: "absolute",
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#2d2e32",
                  bottom: "-5px",
                  left: "0",
                }}
              ></span>
            </h3>
            <div className="icons grid grid-cols-8 gap-x-[30px] gap-y-[20px] justify-center lg:ml-[60px] ml-0">
              <TechIcon icon={html} alt="HTML 5" />
              <TechIcon icon={css} alt="CSS 3" />
              <TechIcon icon={js} alt="JavaScript ES6+" />
              <TechIcon icon={react} alt="React.js" />
              <TechIcon icon={tailwind} alt="Tailwind CSS" />
            </div>
          </div>
          <div className="tech-stack flex lg:flex-row flex-col items-center mt-8">
            <h3
              className="text-xl font-bold mb-8 lg:mb-0"
              style={{
                position: "relative",
              }}
            >
              Backend Stack
              <span
                className="hidden lg:block"
                style={{
                  content: "",
                  position: "absolute",
                  width: "3px",
                  height: "100%",
                  backgroundColor: "#2d2e32",
                  top: "0",
                  left: "180px",
                }}
              ></span>
              <span
                className="block lg:hidden"
                style={{
                  content: "",
                  position: "absolute",
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#2d2e32",
                  bottom: "-5px",
                  left: "0",
                }}
              ></span>
            </h3>
            <div className="icons grid grid-cols-8 gap-x-[30px] gap-y-[20px] justify-center lg:ml-[60px] ml-0">
              <TechIcon icon={node} alt="Node.js" />
              <TechIcon icon={express} alt="Express.js" />
              <TechIcon icon={mongodb} alt="Mongodb" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechIcon = (props) => {
  return (
    <div
      className="icon md:h-[60px] h-[55px] md:w-[60px] w-[55px] flex items-center justify-center rounded-full bg-gray-50"
      style={{
        boxShadow: "0px 0px 8px #d3d3d3",
      }}
      title={props.alt}
    >
      <img className="h-[50%] w-[50%]" src={props.icon} alt={props.alt} />
    </div>
  );
};

export default Hero;
