import React from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Banner from "../assets/Banner.png";
import { FaLocationArrow } from "react-icons/fa6";
import { FcStart } from "react-icons/fc";
import Hero from "../assets/hero.jpg";
import About from "../assets/About-text.png";



export default function LandingPage() {
  return (
    <div className="min-h-full w-full justify-center items-center bg-gradient-to-br from-blue-200 to-blue-400">
      <Navbar />

      <section id="home" className="text-center mt-10 w-full  md:h-auto grid md:grid-cols-2 grid-template-columns-(repeat-2, 1fr) bg-gradient-to-br from-orange-200 to-blue-400">
        <div className=" flex flex-col justify-center mt-8 md:mt-15  items-center w-full h-full">
          <div className="w-full h-[60%]">
            <img src={Banner} alt="banner img w-full h-full center" />
          </div>
          <div className='flex justify-center pb-4  gap-4 md:gap-8 items-center w-full h-[40%]'>
            <Link to="/signup">
              <button className='flex justify-center items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl'>
                <h3>Start free Trial</h3>
                <FaLocationArrow />
              </button>
            </Link>

            <Link to="https://www.youtube.com/" target="_blank">
              <button className='flex justify-center items-center gap-2 px-4 py-2 text-black'>
                <FcStart />
                <h3>How it works</h3>
              </button>
            </Link>          
          </div>
        </div>
        <div className="w-full h-full object-fit-fill">
          <img src={Hero} alt="hero image" />
        </div>
      </section>

      <section id="about" className="text-center  w-full h-auto flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-blue-300">
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <img src={About} alt="about us "  className=' w-[100px] object-cover object-center'/>
          <p>SkillUp Academy is a dynamic online learning platform dedicated to equipping individuals with essential skills for career success. With expert-led courses, interactive learning experiences, and a focus on real-world applications, we help learners advance in technology, business, and creative fields. Whether you're starting fresh or looking to upskill, SkillUp Academy provides the tools and support to help you thrive in today’s competitive job market. </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 grid-template-colums(repeat-3/1fr) pt-4">
            <div className="">dfdf</div>
            <div className="">dfdf</div>
            <div className="">dfdf</div>
          </div>
        </div>
      </section>

      <section id="features" className="text-center pt-10 w-full min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-yellow-200 to-pink-400">
        <h1>Features Section</h1>
      </section>

      <section id="testimonials" className="text-center pt-10 w-full min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-orange-200 to-blue-400">
        <h1>Testimonials Section</h1>
      </section>

      <Footer />
    </div>
  );
}
