import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class BreadCrumb extends Component {
    render() {
        return (
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">

                        <li className="breadcrumb-item"><NavLink activeStyle={{ color: "red" }} exact to="/">Home</NavLink></li>
                        <li className="breadcrumb-item"><NavLink activeStyle={{ color: "red" }} to="/productPage/3">Product Page</NavLink></li>
                        <li className="breadcrumb-item"><NavLink activeStyle={{ color: "red" }} to="/requestPage">Request Page</NavLink></li>
                        <li className="breadcrumb-item"><NavLink activeStyle={{ color: "red" }} to="/supportPage">Support Page</NavLink></li>
                        <li className="breadcrumb-item"><NavLink activeStyle={{ color: "red" }} to="/categoryPage">Category Page</NavLink></li>
                        <li className="breadcrumb-item"><NavLink activeStyle={{ color: "red" }} to="/promoPage">Promo Page</NavLink></li>
                        <li className="breadcrumb-item"><NavLink activeStyle={{ color: "red" }} to="/shopPage">Shop Page</NavLink></li>
                        <li className="breadcrumb-item"><NavLink activeStyle={{ color: "red" }} to="/login">Login Page</NavLink></li>
                        <li className="breadcrumb-item"><NavLink activeStyle={{ color: "red" }} to="/logout">Logout Page</NavLink></li>
                    </ol>
                </nav>
            </div>
        )
    }
}
