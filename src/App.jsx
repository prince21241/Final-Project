import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div>
      <MovieCard movie={{ title: "Prince's Film", release_date: "2024" }} />
      <MovieCard movie={{ title: "Prince's Film", release_date: "2024" }} />
    </div>
  );
}

export default App;
