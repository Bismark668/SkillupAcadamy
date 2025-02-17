import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Logo from "../assets/sulogo.png" 


export default function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("/");

    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll("section");
          let currentSection = "/";
          sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
              currentSection = section.getAttribute("id");
            }
          });
          setActiveSection(currentSection);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);
        


  return (
    <div className="min-h-full w-full justify-center items-center  bg-gradient-to-br from-blue-200 to-blue-400">
        <nav className="w-full  h-auto overflow-hidden flex justify-between items-center p-2 md:p-4 z-10">
                <Link to="/#">
                <img src={Logo} alt="SkillUp Academy Logo" className="h-[80px] w-[180px] font-[5rem]" />
                </Link>
                <button 
                    className="md:hidden text-gray-700 focus:outline-none" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            <ul className={`md:flex space-x-6 absolute md:static top-16 left-0 w-full   p-4 md:p-0 md:w-auto ${menuOpen ? 'block' : 'hidden'}`}>
                <li><a href="#" className={`block py-2 ${activeSection === 'home' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}    `}>Home</a></li>
                <li><a href="#about" className={`block py-2 ${activeSection === 'about' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>About</a></li>
                <li><a href="#features" className={`block py-2 ${activeSection === 'features' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>Key Features</a></li>
                <li><a href="#testimonials" className={`block py-2 ${activeSection === 'testimonials' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>Testimonials</a></li>
            </ul>
            <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hidden md:block">Join Now</Link>
        </nav>

        <section id='home' className="text-center pt-10 w-full min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-blue-400">
            <div className="div">

            </div>

        </section>

        <section id="about" className=" text-center  w-full h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-blue-400">
        <h2 className="text-2xl font-semibold">Boost Your Career with Our Training</h2>
        <p className="text-gray-600 mt-2">Learn data analytics from top instructors.</p>
        </section>
        <section id="features" className="text-center mt-6">
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <p className="text-gray-600 mt-2">Flexible online courses, expert mentors, and real-world projects.</p>
        </section>
        <section id="testimonials" className="text-center mt-6">
        <h2 className="text-2xl font-semibold">What Our Students Say</h2>
        <p className="text-gray-600 mt-2">"This program changed my career!" - Jane Doe</p>
        </section>
        <nav className="mt-6 text-center">
        <Link to="/dashboard" className="text-blue-500">Go to Dashboard</Link>
        </nav>
    </div>
  )
}
