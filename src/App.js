import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import a from './images/a.png';
import b from './images/b.png';
import c from './images/c.png';
import d from './images/d.png';
import e from './images/e.png';
import f from './images/f.png';
import g from './images/g.png';
import h from './images/h.png';
import i from './images/i.png';
import j from './images/j.png';
import k from './images/k.png';
import l from './images/l.png';

const categories = [
  {
    name: 'Shoes',
    products: [
      { name: 'Nike Air Max 270', price: '$150', image: a },
      { name: 'Nike Air Force 1', price: '$120', image: b },
      { name: 'Nike Air Zoom Pegasus', price: '$130', image: c },
      { name: 'Nike Dunk Low', price: '$110', image: d },
      { name: 'Nike Air Jordan 1', price: '$170', image: e },
    ],
  },
  {
    name: 'Clothing',
    products: [
      { name: 'Nike Sportswear Club Fleece', price: '$55', image: f },
      { name: 'Nike Dri-FIT Tee', price: '$35', image: g },
      { name: 'Nike Pro Shorts', price: '$30', image: h },
      { name: 'Nike Windrunner Jacket', price: '$100', image: i },
    ],
  },
  {
    name: 'Accessories',
    products: [
      { name: 'Nike Heritage Backpack', price: '$45', image: j },
      { name: 'Nike Everyday Socks (6 Pairs)', price: '$28', image: k },
      { name: 'Nike Swoosh Headband', price: '$10', image: l },
      { name: 'Nike Water Bottle', price: '$18', image: a },
    ],
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="nike-app">
      <nav className="nike-navbar">
        <div className="nike-logo">
          <img src={logo} alt="Nike" height={32} />
          <span>NIKE</span>
        </div>
        <ul className="nike-menu">
          <li>Home</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
        </ul>
        <div className="nike-cart">🛒</div>
      </nav>
      <header className="nike-hero">
        <h1>JUST DO IT.</h1>
        <p>Discover the latest shoes, apparel, and gear from Nike.</p>
      </header>
      <section className="nike-categories">
        <div className="nike-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`nike-category-tab${cat.name === selectedCategory.name ? ' active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <h2>{selectedCategory.name}</h2>
        <div className="nike-product-grid">
          {selectedCategory.products.map((product, idx) => (
            <div className="nike-product-card" key={idx}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="nike-footer">
        <p>&copy; {new Date().getFullYear()} NIKE, Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
