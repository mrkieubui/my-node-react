import React, { Component } from 'react'
import axios from 'axios';

import Category from './Category';
import Banner from './Banner';
import NewProducts from './NewProducts';
import { Redirect } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");
        let isLoggedIn = true;
        if (token == null) {
            isLoggedIn = false
        }
        this.state = {
            products: [],
            isLoggedIn
        }
    }

    componentDidMount() {
        // Postgres database
        axios.get('/api/test').then(result => this.setState({ message: result.data.message }))
        axios.get('/api/products').then(result => this.setState({ products: result.data }))

        // SQL database
        // axios.get('/api/test_sql').then(res => {
        //   const products = res.data.products;
        //   this.setState({ products });
        // }).catch(error => console.log(error));
    }
    render() {
        if (this.state.isLoggedIn === false) {
            return <Redirect to="/login" />
        }
        var { products } = this.state;
        return (
            <div className="home_page">

                {/* Section Category */}
                <Category />

                {/* Section Banner */}
                <Banner />

                {/* Section New Products */}
                <div className="container newsTitle mt-30">
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg" alt="" />
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/flash.gif" alt="" />
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg" alt="" />
                </div>
                <hr />
                <NewProducts products={products} limit={15} />

            </div>
        )
    }
}
