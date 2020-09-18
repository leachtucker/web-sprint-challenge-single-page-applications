import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import "./App.css";

// Components
import PizzaForm from './Components/PizzaForm';
import FoodDelivery from "./Components/FoodDelivery";

// Initial State
const initialFormValues = {
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

const initialDisabled = true;



const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // HELPERS //

  // Post new order to reqres with axios
  // add new order to state upon success of post
  // Console.log the reponse data
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/users', newOrder)
      .then(response => {
        setOrders([...orders, response.data]);
        // Logging the the response data
        console.log(response.data);
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.log(err);
      })
  }

  // EVENT HANDLERS //
  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  }

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size,
      sauce: formValues.sauce,
      specialInstructions: formValues.specialInstructions.trim(),
      glutenFree: formValues.glutenFree,
      pepporoni: formValues.pepporoni,
      sausage: formValues.sausage,
      onions: formValues.onions,
      dicedTomatoes: formValues.dicedTomatoes
    }
  }

  // SIDE EFFECTS //
  useEffect(() => {
    // Validate form values each time they change

  }, [formValues])

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
      <Route path="/pizza" component={() => <PizzaForm values={formValues} errors={formErrors} disabled={disabled} change={inputChange} submit={formSubmit} />} />
    </>
  );
};

export default App;
