import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";

// Components
import PizzaForm from './Components/PizzaForm';
import FoodDelivery from "./Components/FoodDelivery";

// Initial State
const intialFormValues = {
  size: "",
  sauce: "",
  specialInstructions: "",
  glutenFree: false,
  // Toppings
  pepporoni: false,
  sausage: false,
  onions: false,
  dicedTomatoes: false
}

const initialFormErrors = {
  size: "",
  sauce: "",
  specialInstructions: "",
  glutenFree: "",
  // Toppings
  pepporoni: "",
  sausage: "",
  onions: "",
  dicedTomatoes: ""
}

const initialOrders = [];



const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(intialFormValues);

  return (
    <>
      <header>
        <div className="nav-bar">
          <h1>Lambda Eats</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </div>
      </header>
      <Route exact path="/" component={() => <FoodDelivery />} />
      <Route path="/pizza" component={() => <PizzaForm />} />
    </>
  );
};

export default App;
