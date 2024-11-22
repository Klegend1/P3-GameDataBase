import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-[500px] sm:h-[400px] md:h-[650px]" 
      style={{ backgroundImage: 'url(https://t4.ftcdn.net/jpg/05/64/31/67/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Main Hero Content */}
      <div className="relative container mx-auto text-center text-white flex flex-col justify-center items-center h-full">
        {/* Game Database */}
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
          hover:from-indigo-500 hover:via-pink-500 hover:to-purple-500 transition-all duration-300"
          aria-label="Welcome to the world of games"
        >
          Game Database
        </h2>
        <p 
          className="text-lg sm:text-xl md:text-2xl mb-6 hover:text-blue-400 transition duration-300"
        >
          The Ultimate Experience
        </p>
        
        {/* Link to the GameListPage */}
        <Link 
          to="/games" 
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
        >
          Explore Games
        </Link>
      </div>
    </section>
  );
}

export default Hero;


