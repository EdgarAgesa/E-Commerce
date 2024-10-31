import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h3>Need Help?</h3>
          <ul>
            <li><Link to="#">Chat with us</Link></li>
            <li><Link to="#">Help Center</Link></li>
            <li><Link to="#">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="#">Track Your Order</Link></li>
            <li><Link to="#">Shipping and delivery</Link></li>
            <li><Link to="#">Pick-up Stations</Link></li>
            <li><Link to="#">Return Policy</Link></li>
            <li><Link to="#">How to Order?</Link></li>
            <li><Link to="#">Dispute Resolution Policy</Link></li>
            <li><Link to="#">Corporate and Bulk Purchase</Link></li>
            <li><Link to="#">Advertise with Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><Link to="#">About us</Link></li>
            <li><Link to="#">Returns and Refunds Policy</Link></li>
            <li><Link to="#">Careers</Link></li>
            <li><Link to="#">Terms and Conditions</Link></li>
            <li><Link to="#">Privacy Notice</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Make Money with Us</h3>
          <ul>
            <li><Link to="#">Sell on Our Platform</Link></li>
            <li><Link to="#">Become a Sales Consultant</Link></li>
            <li><Link to="#">Logistics Service Partner</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>International</h3>
          <ul>
            <li><Link to="#">Algeria</Link></li>
            <li><Link to="#">Nigeria</Link></li>
            <li><Link to="#">Egypt</Link></li>
            <li><Link to="#">Tunisia</Link></li>
            <li><Link to="#">Ghana</Link></li>
          </ul>
        </div>

        <div className="footer-brands">
          <ul>
            <li>Adidas</li>
            <li>Apple</li>
            <li>Canon</li>
            <li>Samsung</li>
            <li>Sony</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
