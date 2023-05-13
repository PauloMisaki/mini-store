import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import './index.css';
import store from './redux';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <React.StrictMode>
          <Routes>
            <Route exact path="/" element={ <Navigate to="/products" replace /> } />
            <Route exact path="/products" element={ <Products /> } />
            <Route exact path="/checkout" element={ <Checkout /> } />
          </Routes>
        </React.StrictMode>
      </Provider>
    </div>
  );
}

export default App;