import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slides from './components/Slide';
import ItemDetails from './components/ItemDetails';
import { CartProvider } from './contexts/CartContext'; 
import Cart from './components/Cart';
import Offer from './components/Offer';
import Sell from './components/Sell';

function App() {
  return (
    <CartProvider> 
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Slides />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/sell with us" element={<Sell />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
