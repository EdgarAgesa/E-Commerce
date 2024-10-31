import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; 
import '../css/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);
  const { cart } = useCart(); // Access cart

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((categories) => {
        const allItems = categories.flatMap(category => category.items);
        setData(allItems);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    if (event.target.value) {
      const filteredItems = data.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSearchResults(filteredItems);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">ShopIt</Link>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="I'm looking for..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="search-button">🔍</button>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="#What we offer">What we offer</Link>
        <Link to="#Sell with us">Sell with us</Link>
        <Link to="#locations">Locations</Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      <div className="cart-icon">
        <Link to="/cart">🛒 Cart ({cart.length})</Link>
      </div>

      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((item) => (
            <Link key={item.id} to={`/items/${item.id}`} className="search-result-item">
              {item.name} - Ksh {item.price}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
