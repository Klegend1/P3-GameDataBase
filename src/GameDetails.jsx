// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { show } from './services/gameDatabase';

// const GameDetails = () => {
//   const { gameId } = useParams();
//   const [game, setGame] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchGameDetails = async () => {
//       try {
//         setLoading(true);
//         const gameData = await show(gameId);
//         setGame(gameData);
//       } catch {
//         setError('Failed to fetch game details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGameDetails();
//   }, [gameId]);

//   // Return loading state
//   if (loading) return <div>Loading...</div>;

//   // Return error state
//   if (error) return <div>{error}</div>;

//   // Return no data available state
//   if (!game) return <div>No game data available</div>;

//   // Render game details
//   return (
//     <div className="game-details p-6 bg-gray-800 text-white rounded-md">
//       <h1 className="text-4xl font-bold mb-4">{game.name}</h1>

//       {/* Game image */}
//       <div className="game-image mb-6">
//         <img
//           src={game.background_image || '/images/default-game-image.jpg'}
//           alt={game.name}
//           className="w-full h-96 object-cover rounded-lg"
//         />
//       </div>

//       {/* Game info */}
//       <div className="game-info">
//         <p className="text-lg mb-4">{game.description || 'No description available.'}</p>
//         <p className="text-lg font-semibold">Release Date: {game.released || 'Unknown'}</p>
//         <p className="text-lg font-semibold">
//           Platforms: {game.platforms ? game.platforms.map(p => p.name).join(', ') : 'Unknown'}
//         </p>
//         <p className="text-lg font-semibold">
//           Genres: {game.genres ? game.genres.map(g => g.name).join(', ') : 'Unknown'}
//         </p>
//       </div>

//       {/* Button to go back to the game list */}
//       <div className="mt-6">
//         <a
//           href="/games"
//           className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
//         >
//           Back to Game List
//         </a>
//       </div>
//     </div>
//   );
// };

// export default GameDetails;


import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { show } from './services/gameDatabase';

const GameDetails = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        setLoading(true);
        const gameData = await show(gameId);  // Assuming show handles fetching the game data
        setGame(gameData);
      } catch (err) {
        setError('Failed to fetch game details');
        console.error(err);  // Log the actual error for debugging
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  // Return loading state
  if (loading) return <div>Loading...</div>;

  // Return error state
  if (error) return <div>{error}</div>;

  // Return no data available state
  if (!game) return <div>No game data available</div>;

  // Render game details
  return (
    <div className="game-details p-6 bg-gray-800 text-white rounded-md">
      <h1 className="text-4xl font-bold mb-4">{game.name}</h1>

      {/* Game image */}
      <div className="game-image mb-6">
        <img
          src={game.background_image || '/images/default-game-image.jpg'}
          alt={game.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Game info */}
      <div className="game-info">
        <p className="text-lg mb-4">{game.description || 'No description available.'}</p>
        <p className="text-lg font-semibold">Release Date: {game.released || 'Unknown'}</p>
        <p className="text-lg font-semibold">
          Platforms: {game.platforms ? game.platforms.map(p => p.name).join(', ') : 'Unknown'}
        </p>
        <p className="text-lg font-semibold">
          Genres: {game.genres ? game.genres.map(g => g.name).join(', ') : 'Unknown'}
        </p>
      </div>

      {/* Button to go back to the game list */}
      <div className="mt-6">
        <Link
          to="/games"  // Use Link to maintain SPA navigation
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
        >
          Back to Game List
        </Link>
      </div>
    </div>
  );
};

export default GameDetails;
