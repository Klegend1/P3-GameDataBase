import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results || data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const GameListPage = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const [fetchedGames, fetchedCategories] = await Promise.all([
          fetchData('https://api.rawg.io/api/games?key=YOUR_API_KEY'),
          fetchData('https://api.rawg.io/api/genres?key=YOUR_API_KEY')
        ]);
        setGames(fetchedGames);
        setCategories(fetchedCategories);
      } catch {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-6">All Games</h3>

        {/* Render game cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => {
            const releaseYear = new Date(game.released).getFullYear();
            const gameImage = game.background_image;

            return (
              <div key={game.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64 w-full mb-4">
                  <img
                    src={gameImage}
                    alt={game.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white">{game.name}</h4>
                  <p className="text-gray-400">Released in {releaseYear}</p>
                  {/* Link to the Game Detail Page */}
                  <Link to={`/game/${game.id}`} className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Render Categories (Optional) */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-white mb-6">Game Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-gray-700 rounded-lg p-4 shadow-lg">
                <h4 className="text-xl text-white">{category.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameListPage;
