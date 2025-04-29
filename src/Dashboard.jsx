import React from 'react';
import avatar from './assets/avatar (2).png'; 
import {Link} from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="font-sans text-[#0A0A0A]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6">
        <div className="text-2xl font-black">Sign Translator</div>
        <div className="hidden lg:flex space-x-8 text-lg font-semibold">
          <a href="#">Home</a>
          <a href="#">Manual</a>
          <a href="#">Camera Capture</a>
          {/* <a href="#">Company</a>
          <a href="#"></a> */}
          <a href="#">My profile</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-2xl font-black">Login</a>
          {/* <button className="border rounded-full px-3 py-1 font-bold">EN</button> */}
          {/* <button className="bg-black text-white font-bold px-4 py-2 rounded-full text-sm"> */}
          <button className = "text-2xl font-black">
            Settings
          </button>
        </div>
      </nav>

      {/* Banner */}
      <div className="bg-[#2EE1A2] py-3 text-center font-semibold text-white text-lg">
        Bridging Communication Barriers through AI Based Sign Language Translator. →
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div className="space-y-6">
          <h1 className="text-5xl font-black leading-tight tracking-tight">
            Unlock language.<br />
            Unlock opportunity.
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed font-medium">
          Bridging silence with innovation  our Sign Language Translator empowers every hand gesture to speak, connecting worlds through technology.
          </p>
          <div className="flex space-x-4 pt-4">
            <button className="bg-[#00C87D] hover:bg-[#00a868] text-white font-bold text-lg px-6 py-3 rounded-full">
              Start Translation
            </button>
            <button className="border-2 border-black text-black font-bold text-lg px-6 py-3 rounded-full">
              Learn Sign Language
            </button>
          </div>
        </div>

        {/* Right Avatars */}
        <div className="flex justify-center items-center">
          <div className="w-[340px] h-[340px] bg-[#C9F8E3] rounded-full flex flex-wrap justify-center items-center p-6 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-28 h-28 bg-white rounded-full p-1">
                <img src={avatar} alt="avatar" className="w-full h-full rounded-full object-cover" />
              </div>
            ))} 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;





