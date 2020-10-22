import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            isLoggedIn: false,
            userNameErr: false,
            passwordErr: false
        }
    }
    changeValue = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }
    onLogin = () => {
        var { userName, password } = this.state;
        localStorage.setItem("token", "dasdasdasdasdasdsad")
        if (userName.toString() === "admin" && password.toString() === "123456") {
            this.setState({
                isLoggedIn: true,
                userName,
                password
            })
        } else if (userName.toString() !== "admin" && password.toString() === "123456") {
            this.setState({
                userNameErr: true,
                passwordErr: false
            })
        } else if (userName.toString() === "admin" &&password.toString() !== "123456") {
            this.setState({
                userNameErr: false,
                passwordErr: true
            })
        } else {
            this.setState({
                userNameErr: true,
                passwordErr: true
            })
        }
    }
    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to="/" />
        }
        return (
            <div className="container row">
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="form_login">
                        <h4 className="text-center">Đăng nhập</h4>
                        <input type="text" id="userName" name="userName" className="form-control mt-30" placeholder="Tên đăng nhập" onChange={(e) => this.changeValue(e)} />
                        {this.state.userNameErr ?
                            <small id="userNameHelp" className="form-text text-muted">UserName chưa đúng *</small>
                            : null}
                        <br />
                        <input type="text" id="password" name="password" className="form-control" placeholder="Mật khẩu" onChange={(e) => this.changeValue(e)} />
                        {this.state.passwordErr ?
                            <small id="passwordHelp" className="form-text text-muted">Password chưa đúng *</small>
                            : null}
                        <br />
                        <div className="wrapper text-center">
                            <button className="btn btn-outline-primary" onClick={this.onLogin}>Đăng nhập</button>
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        )
    }
}
