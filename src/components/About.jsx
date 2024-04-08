import React from "react";
import AboutImg from "../assets/images/about.webp";

const About = () => {
  return (
    <section id="about">
      <div className="container flex flex-col justify-center items-center max-w-[1000px] md:w-[96%] px-5 mx-auto lg:h-screen py-[80px] lg:py-[0]">
        <div className="content w-full flex flex-col lg:flex-row justify-between items-start">
          <div className="image w-[40%] h-[100%]">
            <div
              className="img"
              style={{
                backgroundImage: `url(${AboutImg})`,
                height: "100%",
                width: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
                // boxShadow: "0 0 10px rgba(0,0,0,0.5)",
              }}
            ></div>
          </div>
          <div className="text lg:w-[55%] w-[100%] md:text-left text-center">
            <h3 className="text-blue-500 text-xl font-bold mb-3">ABOUT ME</h3>
            <h2 className="text-2xl font-bold mb-5">
              Full Stack Developer from Barishal, Bangladesh 📍
            </h2>
            <p className="text-gray-500">
              Hi, I'm Ahsan Habib, a Full Stack Developer proficient in HTML,
              CSS, JavaScript, React, Node.js, Express, MongoDB, and Tailwind
              CSS. I specialize in crafting web applications with intuitive user
              interfaces and robust backend functionality. I'm dedicated to
              delivering high-quality solutions that meet client needs and
              contribute positively to projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
