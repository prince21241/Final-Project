import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav classname="navbar">
      <div classname="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div classname="navbar-links">
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
