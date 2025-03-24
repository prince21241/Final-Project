const API_KEY = "9478ccf185c09bbc8c158428588de898";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Failed to fetch popular movies");

    const data = await response.json();
    return data.results || []; // Ensure an array is returned
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    if (!response.ok) throw new Error("Failed to fetch search results");

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error searching for movies:", error);
    return [];
  }
};
