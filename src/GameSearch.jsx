import React, { useState, useEffect } from 'react';
import { show } from './services/gameDatabase';
import GameList from './GameList';

const GameSearch = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedGames = await show(page);
        setGames(fetchedGames.results);
        setTotalPages(fetchedGames.totalPages);  
      } catch (err) {
        setError('Error fetching games');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start p-6">
      {/* Loading Spinner */}
      {loading && <p className="text-center text-white">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Game List */}
      <div className="w-full max-w-6xl mx-auto">
        {games.length === 0 && !loading && !error && (
          <p className="text-center text-white">No games found.</p>
        )}
        <GameList games={games} />
      </div>

      {/* Pagination Controls */}
      <div className="pagination mt-4 flex justify-center items-center space-x-4">
        <button
          onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Previous
        </button>
        <span className="text-white">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(prevPage => Math.min(prevPage + 1, totalPages))}
          disabled={page === totalPages}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GameSearch;
