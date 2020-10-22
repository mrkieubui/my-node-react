import React, { Component } from 'react'
import Product from '../Common/Product';

export default class NewProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props,
        }
    }

    render() {
        var { products, limit } = this.props;
        return (
            <div className="container new_products">

                <div className="row mt-3">
                    {
                        products.map((product, key) => {
                            if (key < limit) {
                                return <Product key={key} product={product} />
                            } else return null
                        })
                    }
                </div>
                <div className="row">
                    <button type="button" className="btn btn-outline-primary">Xem thêm</button>
                </div>
            </div>
        )
    }
}
