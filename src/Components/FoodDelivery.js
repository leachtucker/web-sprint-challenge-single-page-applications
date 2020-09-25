import React from  'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import burgerImg from '../Assets/burger.jpg'

export default function() {

    return (
        <section className="food-delivery">
            <div className="hero">
                <h2>Your favorite food delivered while coding</h2>
                <Link className="button" to="/pizza">Pizza?</Link>
            </div>
            <div className="food-container">
                <h3>Food delivery in Gotham City</h3>
                <div className="food-gallery">
                    <div className="food-tile">
                        <img className="food-img" src={burgerImg} alt="burger" />
                        <h4>McDonald's</h4>
                        <p>$ • American • Fast Food • Burger</p>
                    </div>
                    <div className="food-tile">
                        <img className="food-img" src={burgerImg} alt="burger" />
                        <h4>McDonald's</h4>
                        <p>$ • American • Fast Food • Burger</p>
                    </div>
                    <div className="food-tile">
                        <img className="food-img" src={burgerImg} alt="burger" />
                        <h4>McDonald's</h4>
                        <p>$ • American • Fast Food • Burger</p>
                    </div>
                    <div className="food-tile">
                        <img className="food-img" src={burgerImg} alt="burger" />
                        <h4>McDonald's</h4>
                        <p>$ • American • Fast Food • Burger</p>
                    </div>
                    <div className="food-tile">
                        <img className="food-img" src={burgerImg} alt="burger" />
                        <h4>McDonald's</h4>
                        <p>$ • American • Fast Food • Burger</p>
                    </div>
                    <div className="food-tile">
                        <img className="food-img" src={burgerImg} alt="burger" />
                        <h4>McDonald's</h4>
                        <p>$ • American • Fast Food • Burger</p>
                    </div>
                    <div className="food-tile">
                        <img className="food-img" src={burgerImg} alt="burger" />
                        <h4>McDonald's</h4>
                        <p>$ • American • Fast Food • Burger</p>
                    </div>
                    <div className="food-tile">
                        <img className="food-img" src={burgerImg} alt="burger" />
                        <h4>McDonald's</h4>
                        <p>$ • American • Fast Food • Burger</p>
                    </div>
                </div>
            </div>
        </section>
    );
}