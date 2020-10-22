import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Logout extends Component {
    constructor(props) {
        super(props);
        localStorage.removeItem("token");
    }
    render() {
        return (
            <div className="container row mt-60">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <h4>Bạn đã đăng xuất thành công!</h4>
                    <hr />
                    <NavLink to="/login"><button className="btn btn-outline-primary mt-60" onClick={this.logOut}>
                        Đăng nhập 
                    </button></NavLink>
                </div>
                <div className="col-3"></div>
            </div>
        )
    }
}
