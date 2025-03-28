import { Link } from "react-router-dom";
import "../css/Navbar.css";
import "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      {" "}
      {/* Fixed className */}
      <div className="navbar-brand">
        {" "}
        {/* Fixed className */}
        <Link to="/" className="brand-link">
          <img src="{logo}"></img>
        </Link>
      </div>
      <div className="navbar-links">
        {" "}
        {/* Fixed className */}
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
