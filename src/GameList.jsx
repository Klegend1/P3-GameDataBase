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
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  const [searchQuery, setSearchQuery] = useState('');  

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const url = 'https://api.rawg.io/api/games?key=04e72ab6b4e845e78ced3291aacc2c2d'; 
        const fetchedGames = await fetchData(url);
        setGames(fetchedGames);  
      } catch (error) {
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
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 >= 0.5; 

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-500">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">★</span>);
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-400">★</span>);
    }

    return stars;
  };

  const getRatingInStars = (rating) => {
    return (rating / 20).toFixed(1); 
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section id="games" className="py-12 bg-gray-800">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-6">All Games</h3>

        <input
          type="text"
          placeholder="Search for a game..."
          className="p-2 w-full md:w-1/2 mx-auto mb-8 bg-gray-700 text-white rounded"
          value={searchQuery}
          onChange={handleSearch}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => {
            const releaseYear = new Date(game.released).getFullYear();
            const gameImage = game.background_image;
            const genres = game.genres?.map((genre) => genre.name).join(', ') || 'N/A';
            const platforms = game.platforms?.map((platform) => platform.platform.name).join(', ') || 'N/A';
            const rating = game.rating || 0; 
            const ratingInStars = getRatingInStars(rating);

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
                  <p className="text-gray-300 mt-2">Genres: {genres}</p>
                  <p className="text-gray-300 mt-2">Platforms: {platforms}</p>
                  <div className="flex space-x-1 mt-2">
                    {renderStars(ratingInStars)} 
                  </div>
                  <p className="text-gray-300 mt-2">Rating: {ratingInStars} / 5</p> 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GameList;
