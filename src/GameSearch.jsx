import React, { useState } from 'react';
import { show } from './services/gameDatabase'; 
import GameList from './GameList';

const GameSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const fetchedGames = await show(searchQuery);  
      setGames(fetchedGames.results);
    } catch (err) {
      setError('Error fetching games');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-6">
      
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for a game..."
          className="p-2 border border-gray-300 rounded w-full sm:w-1/2 mx-auto"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {/* Loading Spinner */}
      {loading && <p className="text-center text-white">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Game List */}
      <div>
        {games.length === 0 && !loading && !error && (
          <p className="text-center text-white">No games found.</p>
        )}
        <GameList games={games} />
      </div>
    </div>
  );
};

export default GameSearch;
