import MovieCard from "../MovieCard/MovieCard";
import "./Home.css";

function Home({
  movies,
  loading,
  error,
  searchQuery,
  setSearchQuery,
  handleSearch,
}) {
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
