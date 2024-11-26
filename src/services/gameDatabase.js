export const show = async (query = '') => {
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


export const showOneGame = async (id) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_BASE_URL;
  
  try {
    const res = await fetch(`${apiUrl}/${id}?key=${apiKey}`, { method: 'GET' });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch game details: ${res.statusText}`);
    }

    const data = await res.json();
    console.log(data)
    return data; 
  } catch (err) {
    console.error('Error fetching game details:', err);
    throw err;
  }
};
