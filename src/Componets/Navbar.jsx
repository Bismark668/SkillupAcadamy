import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/sulogo.png";

function Navbar() {
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
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="w-full fixed top-0 left-0 bg-white shadow-md flex justify-between items-center px-4 md:px-8 py-4 z-10">
            <img src={Logo} alt="SkillUp Academy Logo" className="h-12 md:h-16" />
            <button className="md:hidden text-gray-700 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden md:flex'}`}>
                <li><a href="#" className={`block py-2 px-4 ${activeSection === 'home' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>Home</a></li>
                <li><a href="#about" className={`block py-2 px-4 ${activeSection === 'about' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>About</a></li>
                <li><a href="#features" className={`block py-2 px-4 ${activeSection === 'features' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>Key Features</a></li>
                <li><a href="#testimonials" className={`block py-2 px-4 ${activeSection === 'testimonials' ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}>Testimonials</a></li>
            </ul>
            <Link to="/signup" className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg">Join Now</Link>
        </nav>
    );
}

export default Navbar;
