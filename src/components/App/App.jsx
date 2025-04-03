import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Favorites from "../Favorites/Favorites";
import Navbar from "../NavBar/NavBar";
import { MovieProvider } from "../../contexts/MovieContext";
import Footer from "../Footer/Footer";

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
          <Footer />
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
