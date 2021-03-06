import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as yup from 'yup';
import schema from './Validation/FormSchema';
import axios from 'axios';
import "./App.css";

// Components
import PizzaForm from './Components/PizzaForm';
import FoodDelivery from "./Components/FoodDelivery";

// Initial State
const initialFormValues = {
  name: "",
  size: "",
  sauce: "",
  specialInstructions: "",
  quantity: "1",
  glutenFree: false,
  // Toppings
  pepperoni: false,
  sausage: false,
  onions: false,
  dicedTomatoes: false
}

const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
  specialInstructions: "",
  quantity: "",
  glutenFree: "",
  // Toppings
  pepperoni: "",
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

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
        .then(valid => {
          setFormErrors({ ...formErrors, [name]: ""});
        })
        .catch(err => {
          setFormErrors({ ...formErrors, [name]: err.errors[0]})
        })
  }

  // EVENT HANDLERS //
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const formSubmit = () => {
    const newOrder = {
      size: formValues.size,
      sauce: formValues.sauce,
      specialInstructions: formValues.specialInstructions.trim(),
      quantity: formValues.quantity,
      glutenFree: formValues.glutenFree,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      onions: formValues.onions,
      dicedTomatoes: formValues.dicedTomatoes
    }

    postNewOrder(newOrder);
  }

  // SIDE EFFECTS //
  useEffect(() => {
    // Validate form values each time they change
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid);
      })
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
      {/* Must use render instead of component. Otherwise, our inputs will lose focus on each change */}
      <Route path="/pizza" render={() => <PizzaForm values={formValues} errors={formErrors} disabled={disabled} change={inputChange} submit={formSubmit} />} />
    </>
  );
};

export default App;
