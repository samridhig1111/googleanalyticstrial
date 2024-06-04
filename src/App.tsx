import { Routes, Route } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import FoodDetails from "./modules/foodDetails/FoodDetails";
import Cart from "./modules/cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import REACTGA from "react-ga";
import React from "react";

const TRACKING_ID = "G-87MR5FL9RG";
REACTGA.initialize(TRACKING_ID)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/food-details" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
