import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
        </Routes>

    </div>
  );
}

export default App;
