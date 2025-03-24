const API_KEY = "9478ccf185c09bbc8c158428588de898";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = response.json();
  return data.results;
};

export const searchMovies = async (querry) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&querry=${encodeURIComponent(
      querry
    )}`
  );
  const data = response.json();
  return data.results;
};
