import React, { Component } from 'react'
import axios from 'axios';
import ReactStars from 'react-stars';

export default class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            p_name: "",
            p_price: "",
            p_review: 0,
            p_bought: 0,
            p_image: null
        }
    }

    changeInput = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value,
            formStatus: true
        })
    }
    ratingChanged = (p_review) => {
        console.log(p_review);
        this.setState({ p_review: p_review });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var { p_name, p_price, p_review, p_bought, p_image } = this.state;
        if (p_name !== "" && p_price !== "") {
            axios.post('/api/products', {
                id: this.props.totalProduct + 1,
                product_name: p_name,
                product_price: p_price,
                product_image: p_image,
                product_review: p_review,
                product_bought: p_bought
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        } else {
            alert("Chưa nhập đủ thông tin!!!")
        }
        this.props.changeFormStatus()
    }
    render() {
        return (
            <div>
                <li className="list-group-item list-group-item-secondary p-2">Thêm sản phẩm mới</li>
                <form className="p-3">
                    <div className="form-group">
                        <label htmlFor="p_name">Tên sản phẩm</label>
                        <input className="form-control" name="p_name" id="p_name" aria-describedby="p_name" placeholder="Nhập tên" onChange={(e) => this.changeInput(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="p_price">Giá sản phẩm</label>
                        <input className="form-control" name="p_price" id="p_price" placeholder="Nhập giá" onChange={(e) => this.changeInput(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="p_image">Hình ảnh</label>
                        <input className="form-control" name="p_image" id="p_image" placeholder="Nhập hình ảnh" onChange={(e) => this.changeInput(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="p_review">Đánh giá</label>
                        {/* <input className="form-control" name="p_review" id="p_review" placeholder="Nhập mô tả" onChange={(e) => this.changeInput(e)} /> */}
                        <ReactStars
                            count={5}
                            onChange={(p_review) => this.ratingChanged(p_review)}
                            size={24}
                            color2={'#ffd700'}
                            value={this.state.p_review}
                        />
                    </div>
                    <div className="form-check mb-4">
                        <input type="number" className="form-check-input" name="p_bought" id="p_bought" onChange={(e) => this.changeInput(e)} />
                        <label className="form-check-label" htmlFor="p_bought">Đã bán</label>
                    </div>
                    <button className="btn btn-success" onClick={this.onSubmit}>Thêm mới</button>
                </form>
            </div>
        )
    }
}
