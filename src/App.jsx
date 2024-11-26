import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { show } from './services/gameDatabase';
import Navbar from './Navbar';
import Hero from './Hero';
import Home from './Home';
import GameSearch from './GameSearch';
import GameList from './GameList';
import GameDetails from './GameDetails';

const App = () => {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await show();
      setGameData(data);
    } catch (err) {
      setError('Failed to load game data');
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

      {loading ? (
        <div className="text-center mt-8">Loading game data...</div>
      ) : error ? (
        <div className="text-center mt-8 text-red-500">{error}</div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GameSearch gameData={gameData} />} />
            <Route path="/game-list" element={<GameList gameData={gameData} />} />
            <Route path="/games/:id" element={<GameDetails gameData={gameData} />} />
          </Routes>

          <div className="game-info mt-8">
            <h1 className="text-3xl font-bold">{gameData.name}</h1>
            <p>{gameData.description}</p>
          </div>

          <button
            onClick={fetchData}
            className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
          >
            Fetch Game Data Again
          </button>
        </>
      )}
    </div>
  );
};

export default App;
