import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/games/search?q=${searchQuery}`);
  };

  return (
    <nav className="bg-black shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">

        {/* Profile Section */}
        <div className="flex items-center flex-col">
          <img 
            src="https://64.media.tumblr.com/3d2134300bdb7f663eb95b248f1a730b/01845a919972fae9-d1/s1280x1920/ee8466dfb6e90edda0029f1edf228cfacb26b526.jpg"  
            alt="Profile"
            className="w-16 h-16 rounded-full border-4 border-white"
          />
          <h2 className="text-white mt-2 text-sm">Kai Smith</h2>
        </div>

        {/* Navbar Title */}
        <h1 className="text-2xl font-semibold text-white ml-4">Project 3</h1>

        <ul className="flex space-x-6 text-white">
          <li><Link to="/" className="hover:text-green-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-400">About</Link></li>
          <li><Link to="/games" className="hover:text-purple-400">Games</Link></li>
          <li><Link to="/news" className="hover:text-blue-400">News</Link></li>
          <li><Link to="/community" className="hover:text-gray-400">Community</Link></li>
        </ul>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="flex items-center ml-4 bg-gray-700 p-2 rounded-lg shadow-md">
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search for a game..."
            className="p-2 border-none rounded-l-lg w-full text-white bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;


