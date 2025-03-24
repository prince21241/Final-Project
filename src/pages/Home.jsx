import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../api/Api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState(""); // Fixed typo
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        console.log("Fetching popular movies...");
        const popularMovies = await getPopularMovies();
        console.log("Movies received:", popularMovies);
        setMovies(popularMovies);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    setSearchQuery(""); // Reset input after search
  };

  return (
    <div className="home">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Loading & Error Messages */}
      {loading && <p>Loading movies...</p>}
      {error && <p className="error">{error}</p>}

      {/* Movies Grid */}
      <div className="movies-grid">
        {movies.length > 0
          ? movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
          : !loading && <p>No movies found.</p>}
      </div>
    </div>
  );
}

export default Home;
