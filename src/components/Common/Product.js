import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ReactStars from 'react-stars';

const defaultImage = "https://www.greensealcompany.com/en/wp-content/uploads/2020/05/no-imagen.gif";

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p_rating: 0
        }
    }
    ratingChanged = (p_rating) => {
        console.log(p_rating);
        // this.setState({ p_rating: p_rating });
    }

    render() {
        var { product } = this.props;
        return (
            <div className="mb-4 product">
                <div className="card" title={product.product_name}>
                    <div className="card_image">
                        <NavLink to={"/productPage/" + product.id}>
                            <img className="card-img-top" src={product.product_image == null ? defaultImage : product.product_image} alt={product.product_image} />
                        </NavLink>
                    </div>
                    <div className="card-body">
                        <div className="row product_name">
                            <NavLink to="/productPage" >
                                <p className="card-title pl-1">{product.product_name}</p>
                            </NavLink>
                        </div>
                        <div className="row product_price">
                            <p className="card-title red-price text-left pl-1">{product.product_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ</p>
                            {/* <p className="card-title red-price text-left col-8 pl-1">{product.product_price} VNĐ</p> */}
                            <span className="product_sale">-{product.product_sale}%</span>
                        </div>
                        <div className="row product_old_price">
                            <p className="card-title red-price text-left pl-1">{product.product_old_price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ</p>
                        </div>
                        <div className="row">
                            <div className="col-6 product_rating">
                                <ReactStars
                                    count={5}
                                    value={parseInt(product.product_rating)}
                                    onChange={(p_rating) => this.ratingChanged(p_rating)}
                                    size={16}
                                    color2={'#ffd700'} />
                            </div>
                            <div className="col-6 product_location">
                                <p>{product.product_location}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="fading_layer"></div> */}
            </div>
        )
    }
}
