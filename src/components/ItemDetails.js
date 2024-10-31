import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../contexts/CartContext';
import '../css/ItemDetails.css';

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get('https://shopit-server-7dj9.onrender.com/categories')
      .then(response => {
        const allCategories = response.data;
        
        let foundItem = null;
        let itemCategory = null;

        for (const category of allCategories) {
          foundItem = category.items.find(item => item.id === parseInt(id));
          if (foundItem) {
            itemCategory = category;
            break;
          }
        }

        if (foundItem) {
          setItem(foundItem);
          
          const otherItems = itemCategory.items.filter(categoryItem => categoryItem.id !== foundItem.id);
          setRelatedItems(otherItems);
        }
      })
      .catch(error => console.error("Error fetching item data:", error));
  }, [id]);

  if (!item) return <div>Loading...</div>;

  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  return (
    <div className="item-details-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>

        {item.availableSizes && (
          <p><strong>Size:</strong> {Array.isArray(item.availableSizes) 
            ? item.availableSizes.join(', ') 
            : item.availableSizes.split(',').map(size => size.trim()).join(', ')}
          </p>
        )}

        {item.color && (
          <p><strong>Color:</strong> {Array.isArray(item.color) 
            ? item.color.join(', ') 
            : item.color.split(',').map(color => color.trim()).join(', ')}
          </p>
        )}

        {item.inStock !== undefined && (
          <p><strong>In Stock:</strong> {item.inStock ? "Yes" : "No"}</p>
        )}

        <p className="price">Ksh {item.price}</p>

        <label>
          Quantity:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
        </label>
        
        <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
      </div>

      {relatedItems.length > 0 && (
        <div className="related-items">
          <h3>Related Items</h3>
          <div className="related-items-list">
            {relatedItems.map(relatedItem => (
              <Link to={`/items/${relatedItem.id}`} key={relatedItem.id} className="related-item">
                <img src={relatedItem.image} alt={relatedItem.name} className="related-item-image" />
                <div className="related-item-info">
                  <h4>{relatedItem.name}</h4>
                  <p>Ksh {relatedItem.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetails;
