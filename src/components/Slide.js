import React, { useState, useEffect } from 'react';
import '../css/slide.css';
import FoodList from './Items';

const slides = [
  {
    title: "Welcome to our E-commerce shopping where you get what you need.",
    subtitle: "Enjoy shopping with us.",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "This is where you get the best quality products for your needs.",
    subtitle: "Fresh, Durable, and Amaizing",
    image: "https://images.pexels.com/photos/1093837/pexels-photo-1093837.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Shop at the comfort of your home.",
    subtitle: "Comfort at Its Best",
    image: "https://images.pexels.com/photos/6995145/pexels-photo-6995145.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
];

function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <section className="featured">
        <div className="content">
          <h3>{slides[currentSlide].subtitle}</h3>
          <h1>{slides[currentSlide].title}</h1>
        </div>
        <div className="featured-image">
          <img src={slides[currentSlide].image} alt="Featured Dish" />
        </div>
      </section>
      <section>
        <FoodList />
      </section>
    </>
  );
}

export default Slides;
