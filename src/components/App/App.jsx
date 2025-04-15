import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Favorites from "../Favorites/Favorites";
import Navbar from "../NavBar/NavBar";
import { MovieProvider } from "../../contexts/MovieContext";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../../api/Api";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load popular movies on initial render
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popular = await getPopularMovies();
        setMovies(popular);
      } catch (err) {
        setError("Failed to load popular movies");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    setLoading(true);
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
      setError(null);
    } catch (err) {
      setError("Search failed.");
    } finally {
      setLoading(false);
      setSearchQuery("");
    }
  };

  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                movies={movies}
                loading={loading}
                error={error}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </main>
    </MovieProvider>
  );
}

export default App;
