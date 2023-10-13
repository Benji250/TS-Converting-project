import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Shop } from './pages/shop/shop';
import './App.css';
import Home from './Home';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <ShopContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="shop" element={<Shop />} />
          </Routes>
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
