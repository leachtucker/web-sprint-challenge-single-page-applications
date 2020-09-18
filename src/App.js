import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";

// Components
import PizzaForm from './Components/PizzaForm';
import FoodDelivery from "./Components/FoodDelivery";


const App = () => {

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
