import React, { Component } from 'react'

export default class FormAddProduct extends Component {
    render() {
        return (
            <form className="mr-3 ml-3">
                <li className="list-group-item list-group-item-secondary mb-3">Thêm sản phẩm mới</li>
                <div className="form-group">
                    <label htmlFor="inputName">Tên sản phẩm</label>
                    <input type="text" className="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Điền tên sản phẩm" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputLink">Hình ảnh minh họa</label>
                    <input type="text" className="form-control" id="inputLink" placeholder="Nhập đường dẫn" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="statusCheck" />
                    <label className="form-check-label" htmlFor="statusCheck">Còn hàng</label>
                </div>
                <button type="button" className="btn btn-primary mt-3">Thêm mới</button>
            </form>
        )
    }
}
