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

const GameList = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const [fetchedGames, fetchedCategories] = await Promise.all([
          fetchData('https://api.rawg.io/api/games?key=04e72ab6b4e845e78ced3291aacc2c2d'),
          fetchData('https://api.rawg.io/api/genres?key=04e72ab6b4e845e78ced3291aacc2c2d')
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

  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-yellow-400 ${i < rating ? 'text-yellow-500' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section id="games" className="py-12 bg-gray-800">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-6">All Games</h3>

        {/* Searchbar */}
        <input
          type="text"
          placeholder="Search for a game..."
          className="p-2 w-full md:w-1/2 mx-auto mb-8 bg-gray-700 text-white rounded"
          value={searchQuery}
          onChange={handleSearch}
        />

        {/* Render game cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => {
            const releaseYear = new Date(game.released).getFullYear();
            const gameImage = game.background_image;

            return (
              <div key={game.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <Link to={`/games/${game.id}`}>
                  <div className="relative h-64 w-full mb-4">
                    <img
                      src={gameImage}
                      alt={game.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white">{game.name}</h4>
                  <p className="text-gray-400">Released in {releaseYear}</p>
                  <div className="flex space-x-1 mt-2">
                    {renderStars(game.rating)}
                  </div>
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

export default GameList;


