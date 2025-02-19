import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-full w-full justify-center items-center bg-gradient-to-br from-blue-200 to-blue-400">
      <Navbar />

      <section id="home" className="text-center pt-10 w-full min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-blue-400">
        <h1>Home Section</h1>
      </section>

      <section id="about" className="text-center pt-10 w-full min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-red-400">
        <h1>About Section</h1>
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
