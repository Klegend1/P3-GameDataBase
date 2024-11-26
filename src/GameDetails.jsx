import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { showOneGame } from "./services/gameDatabase";

const GameDetails = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const gameData = await showOneGame(gameId);
        console.log(gameData)
        setGame(gameData);
      } catch (err) {
        setError("Failed to fetch game details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [gameId]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;

  if (error)
    return <div className="text-center mt-8 text-red-500">{error}</div>;

  if (!game)
    return <div className="text-center mt-8">No game data available</div>;

  return (
    <div className="game-details p-6 bg-gray-800 text-white rounded-md">
      <h1 className="text-4xl font-bold mb-4">{game.name}</h1>

      <div className="game-image mb-6">
        <img
          src={game.background_image || "/images/default-game-image.jpg"}
          alt={game.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      <div className="game-info mb-6">
        <p className="text-lg mb-4">
          {game.description || "No description available."}
        </p>
        <p className="text-lg font-semibold">
          Release Date: {game.released || "Unknown"}
        </p>
        <p className="text-lg font-semibold">
          Platforms:{" "}
          {game.platforms?.map((p) => p.name).join(", ") || "Unknown"}
        </p>
        <p className="text-lg font-semibold">
          Genres: {game.genres?.map((g) => g.name).join(", ") || "Unknown"}
        </p>
      </div>

      <div className="mt-6">
        <Link
          to="/games"
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
        >
          Back to Game List
        </Link>
      </div>
    </div>
  );
};

export default GameDetails;
