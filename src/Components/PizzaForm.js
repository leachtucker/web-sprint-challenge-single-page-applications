import React from 'react';

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
                <form>
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
                            <input type="checkbox" name="sauce" value="original red" checked={values.sauce === 'original red'} onChange={onChange} /> Original Red
                        </label>
                        <label>
                            <input type="checkbox" name="sauce" value="garlic ranch" checked={values.sauce === 'garlic ranch'} onChange={onChange} /> Garlic Ranch
                        </label>
                        <label>
                            <input type="checkbox" name="sauce" value="bbq sauce" checked={values.sauce === 'bbq sauce'} onChange={onChange} /> BBQ Sauce
                        </label>
                        <label>
                            <input type="checkbox" name="sauce" value="spinach alfredo" checked={values.sauce === 'spinach alfredo'} onChange={onChange} /> Spinach Alfredo
                        </label>
                    </div>

                </form>
            </div>
        </section>
    );
}