import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="card mb-4" style={{ width: '18rem' }}>
                    <img className="card-img-top" src="https://salt.tikicdn.com/cache/w584/ts/banner/a3/7b/c1/24309508846dd90cd4cc0e34d727b2fa.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">See more...</a>
                    </div>
                </div>
            </div>
        )
    }
}
