import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [expanded, setExpanded] = useState(false);

  const handleIconClick = () => {
    setExpanded(!expanded);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo2">
          <a>Salient</a>
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <div className="logo">
            <a>Salient</a>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/design">Design</Link>
              </li>
              <li>
                <Link to="/tech">Tech</Link>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            <ul>
              <li>
                <Link to="/demos">More Demos</Link>
              </li>
              <li>
                <Link to="/purchase">Purchase</Link>
              </li>
              <li>
                <div className="search-container">
                  <input
                    type="text"
                    id="searchInput"
                    className={`search-input ${expanded ? "expanded" : ""}`}
                    placeholder="Search..."
                  />
                  <button
                    id="searchIcon"
                    className="search-icon"
                    onClick={handleIconClick}
                  >
                    <i
                      className={`fas ${expanded ? "fa-times" : "fa-search"}`}
                    ></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
