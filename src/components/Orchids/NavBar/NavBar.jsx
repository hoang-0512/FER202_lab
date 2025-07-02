import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ onSearch }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  useEffect(() => {
    // Xử lý smooth transition cho chế độ dark mode
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    // Thêm class cho transition trước khi thay đổi state
    document.body.classList.add("theme-transition");

    // Sau khi transition hoàn tất, xóa class transition
    setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 500);

    setDarkMode((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) onSearch(term); // gọi onSearch mỗi khi thay đổi input
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm.trim()); // gọi onSearch khi submit
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <img
            src="https://s3.amazonaws.com/lg-vectors/bitmaps/554908/809455.png?logo_version=0"
            alt="Orchid Logo"
            className="navbar__logo"
          />
        </div>

        <div className="navbar__nav">
          <Link
            to="/"
            className={`navbar__nav-button ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className={`navbar__nav-button ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <span>About</span>
          </Link>
          <Link
            to="/contact"
            className={`navbar__nav-button ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            <span>Contact</span>
          </Link>
        </div>

        <div className="navbar__right">
          <div className="search-container">
            <form className="navbar__search" onSubmit={handleSearchSubmit}>
              <div className="search-input-wrapper">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  aria-label="Search orchids"
                  spellCheck="false"
                />
                <span className="search-icon">🔍</span>
              </div>
            </form>
          </div>
          <div className="navbar__dark-mode-toggle">
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-pressed={darkMode}
              aria-label="Toggle dark mode"
              className={darkMode ? "dark-active" : "light-active"}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
