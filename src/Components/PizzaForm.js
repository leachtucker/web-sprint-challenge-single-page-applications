import React from 'react';
import styled from 'styled-components';


export default function(props) {
    const { values, errors, disabled,  change, submit} = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <section className="pizza-maker">
            <div className="heading-container">
                <h3>Build Your Own Pizza</h3>
            </div>
            <div className="hero"></div>
            <div className="form-container">
                <h3>Build Your Own Pizza</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <div className="form-bar">
                            <h4>Choice of Size:</h4>
                            <span>Required</span>
                        </div>
                        <label>
                            <select value={values.size} name="size" onChange={onChange}>
                                <option value="">--Select an option--</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                                <option value="extra large">Extra Large</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-group">
                        <div className="form-bar">
                            <h4>Choice of Sauce:</h4>
                            <span>Required</span>
                        </div>
                        <label>
                            <input type="radio" name="sauce" value="original red" checked={values.sauce === 'original red'} onChange={onChange} /> Original Red
                        </label>
                        <label>
                            <input type="radio" name="sauce" value="garlic ranch" checked={values.sauce === 'garlic ranch'} onChange={onChange} /> Garlic Ranch
                        </label>
                        <label>
                            <input type="radio" name="sauce" value="bbq sauce" checked={values.sauce === 'bbq sauce'} onChange={onChange} /> BBQ Sauce
                        </label>
                        <label>
                            <input type="radio" name="sauce" value="spinach alfredo" checked={values.sauce === 'spinach alfredo'} onChange={onChange} /> Spinach Alfredo
                        </label>
                    </div>

                    <div className="form-group">
                        <div className="form-bar">
                            <h4>Add Toppings:</h4>
                            <span>Choose up to 4.</span>
                        </div>
                        <label>
                            <input type="checkbox" name="pepperoni" checked={values.pepperoni} onChange={onChange} /> Pepperoni
                        </label>
                        <label>
                        <input type="checkbox" name="sausage" checked={values.sausage} onChange={onChange} /> Sausage
                        </label>
                        <label>
                            <input type="checkbox" name="onions" checked={values.onions} onChange={onChange} /> Onions
                        </label>
                        <label>
                            <input type="checkbox" name="dicedTomatoes" checked={values.dicedTomatoes} onChange={onChange} /> Diced Tomatoes
                        </label>
                    </div>

                    <div className="form-group">
                        <div className="form-bar">
                            <h4>Choice of Substitute:</h4>
                            <span>Choose up to 1.</span>
                        </div>
                        <label>
                            <div>Gluten Free Crust</div>
                            <div className="switch">
                                <input type="checkbox" name="glutenFree" checked={values.glutenFree} onChange={onChange} />
                                <span className="slider"></span>
                            </div>
                        </label>
                    </div>

                    <div className="form-group">
                        <div className="form-bar">
                            <h4>Special Instructions:</h4>
                        </div>
                        <label id="special-instructions">
                            <input type="text" name="specialInstructions" value={values.specialInstructions} onChange={onChange} placeholder="Anything else you'd like to add?" />
                        </label>
                    </div>

                    <div className="form-bottom">
                        <div className="container">
                            <label>
                                <input type="number" name="quantity" value={values.quantity} onChange={onChange} />
                            </label>
                            <button disabled={disabled} onClick={onSubmit}>Add to Order</button>
                        </div>
                    </div>


                </form>
            </div>
        </section>
    );
}