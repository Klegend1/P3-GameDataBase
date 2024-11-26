import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setSearchQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/games/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="bg-black shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        
        <div className="flex items-center flex-col md:flex-row">
          <img
            src="https://64.media.tumblr.com/3d2134300bdb7f663eb95b248f1a730b/01845a919972fae9-d1/s1280x1920/ee8466dfb6e90edda0029f1edf228cfacb26b526.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full border-4 border-white transition-transform duration-300 transform hover:scale-110 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
          <h2 className="text-white mt-2 md:mt-0 md:ml-4 text-sm md:text-base font-semibold hover:text-yellow-400 hover:bg-gray-800 px-2 py-1 rounded-lg transition duration-300">
            Kai Smith
          </h2>
        </div>

       
        <ul className="flex space-x-6 text-white mt-4 md:mt-0">
          <li>
            <Link to="/" className="text-sm sm:text-base md:text-lg hover:text-green-400 hover:underline transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-sm sm:text-base md:text-lg hover:text-red-400 hover:underline transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/games" className="text-sm sm:text-base md:text-lg hover:text-purple-400 hover:underline transition-colors duration-300">
              Games
            </Link>
          </li>
          <li>
            <Link to="/news" className="text-sm sm:text-base md:text-lg hover:text-blue-400 hover:underline transition-colors duration-300">
              News
            </Link>
          </li>
          <li>
            <Link to="/community" className="text-sm sm:text-base md:text-lg hover:text-gray-400 hover:underline transition-colors duration-300">
              Community
            </Link>
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="flex items-center ml-4 bg-gray-700 p-2 rounded-lg shadow-md w-full md:w-1/3">
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







