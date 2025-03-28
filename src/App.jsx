import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <div>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
