import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Items.css';

const FoodList = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/categories')
      .then(response => {
        const allCategories = response.data;
        setCategories(allCategories);
        
        // Load all items initially
        const allItems = allCategories.flatMap(category => category.items);
        setItems(allItems);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/items/${id}`);
  };

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    setSelectedCategory(categoryName);

    // Filter items based on the selected category
    axios.get('http://localhost:5000/categories')
      .then(response => {
        if (categoryName === "All") {
          const allItems = response.data.flatMap(category => category.items);
          setItems(allItems);
        } else {
          const category = response.data.find(cat => cat.name === categoryName);
          setItems(category ? category.items : []);
        }
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  return (
    <div>
      {/* Category Filter Dropdown */}
      <label>
        Filter by Category:
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          {categories.map(category => (
            <option key={category.name} value={category.name}>{category.name}</option>
          ))}
        </select>
      </label>

      {/* Display Items */}
      <div className="food-list">
        {items.map(item => (
          <div 
            key={item.id} 
            className="food-card"
            onClick={() => handleCardClick(item.id)}
          >
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} className="food-image" />
            <p>{item.description}</p>
            <p className="price">Ksh {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
