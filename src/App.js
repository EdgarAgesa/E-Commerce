import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slides from './components/Slide';
import ItemDetails from './components/ItemDetails';
import { CartProvider } from './contexts/CartContext'; 
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider> 
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Slides />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
