import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { show } from './services/gameDatabase';
import Navbar from './Navbar';
import Hero from './Hero';
import Home from './Home';
import GameSearch from './GameSearch';
import GameList from './GameList';

//import GameListPage from './GameListPage';
//import GameDetail from './GameDetails';

const App = () => {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await show();
      setGameData(data);
    } catch (error) {
      setError('Failed to load game');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />

      {/* Conditional rendering for loading, error, and game data */}
      {loading && <div className="text-center mt-8">Loading game data...</div>}
      {error && <div className="text-center mt-8 text-red-500">{error}</div>}

      <Routes>
        {/* Page Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameSearch gameData={gameData} />} />
        <Route path="/game-list" element={<GameList gameData={gameData} />} />
      </Routes>

      {/* Render fetched game data */}
      {gameData && (
        <div className="game-info mt-8">
          <h1 className="text-3xl font-bold">{gameData.name}</h1>
          <p>{gameData.description}</p>
        </div>
      )}

      {/* Button to manually fetch the game data */}
      <button 
        onClick={fetchData} 
        className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
      >
        Fetch Game Data Again
      </button>
    </div>
  );
};

export default App;


