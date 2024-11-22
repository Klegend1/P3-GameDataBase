
export const show = async (query) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_BASE_URL;
  
    try {
      const res = await fetch(`${apiUrl}?key=${apiKey}&search=${query}`, { method: 'GET' });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch games: ${res.statusText}`);
      }
  
      const data = await res.json();
      console.log(data);  
      return data; 
    } catch (err) {
      console.error('Error fetching game data:', err);
      throw err;  
    }
  };






  
//   //TRYING GET ONE GAME BY ID
//   const fetchGameDetails = async (gameId) => {
//     try {
//       const game = await getGameById(gameId);   
//       console.log(game);  
//     } catch (error) {
//       console.error("Error fetching game details:", error);
//     }
//   };
  
  
//   fetchGameDetails 
  

  