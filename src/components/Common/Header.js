import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-dark promo_nav">
                    <div className="containner top_promo">
                        <NavLink className="navbar-bratoeader_logo" to="/promoPage">
                            <img src="https://salt.tikicdn.com/ts/upload/42/f9/5e/7ccf8b09de0e051cc9054bd535f7b1a1.png" alt="" />
                            <span>Ticketbox </span>
                        </NavLink>
                        <NavLink className="navbar-bratoeader_logo" to="/promoPage">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/1f41899d3b37d9aa3197b8839f6916fe.png" alt="" />
                            <span> Trợ lý Tiki </span>
                        </NavLink>
                        <NavLink className="navbar-bratoeader_logo" to="/promoPage">
                            <img src="https://salt.tikicdn.com/ts/upload/42/f9/5e/7ccf8b09de0e051cc9054bd535f7b1a1.png" alt="" />
                            <span>Ưu đãi đối tác </span>
                        </NavLink>
                        <NavLink className="navbar-bratoeader_logo" to="/promoPage">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/1f41899d3b37d9aa3197b8839f6916fe.png" alt="" />
                            <span>  Đặt vé máy bay  </span>
                        </NavLink>
                        <NavLink className="navbar-bratoeader_logo" to="/promoPage">
                            <img src="https://salt.tikicdn.com/ts/upload/42/f9/5e/7ccf8b09de0e051cc9054bd535f7b1a1.png" alt="" />
                            <span>Khuyến Mãi HOT  </span>
                        </NavLink>
                        <NavLink className="navbar-bratoeader_logo" to="/promoPage">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/1f41899d3b37d9aa3197b8839f6916fe.png" alt="" />
                            <span> Hàng quốc tế  </span>
                        </NavLink>
                        <NavLink className="navbar-bratoeader_logo" to="/promoPage">
                            <img src="https://salt.tikicdn.com/media/upload/2019/01/30/1f41899d3b37d9aa3197b8839f6916fe.png" alt="" />
                            <span>  Bán hàng cùng Tiki  </span>
                        </NavLink>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary head_nav">
                    <div className="container">
                        <div className="head_left">
                            <NavLink className="navbar-brand head_logo" to="/">
                                <img src="https://salt.tikicdn.com/ts/banner/33/ba/89/54c02d2475983f93a024c0cd13f238e4.png" alt="" />
                            </NavLink>
                            <input className="head_input form-control mr-sm-2" type="text" placeholder="Tìm sản phẩm, danh mục, thương hiệu..." aria-label="Search" />
                            <button className="head_search_button btn btn-outline-success my-2 my-sm-0" type="submit">
                                <i className="fa fa-search" aria-hidden="true"></i>Tìm kiếm
                            </button>
                        </div>
                        <div className="head_right">
                            <NavLink className="nav-link" to="/">
                                <i className="fa fa-inbox fa-2x"></i>
                                <span>Theo dõi <br />đơn hàng</span>
                            </NavLink>
                            <NavLink className="nav-link" to="/">
                                <i className="fa fa-bell fa-2x"></i>
                                <span>Thông báo <br />của tôi</span>
                            </NavLink>
                            <div className="account_area">
                                {/* Button login modal */}
                                <i className="fa fa-user fa-2x"></i>
                                <span> Chào Tha.. <br />Tài khoản</span>
                                {/* Modal */}
                                <div className="account_option">
                                    <ul>
                                        <li><NavLink to="/">Tài khoản của tôi</NavLink></li>
                                        <li><NavLink to="/login">Đăng nhập</NavLink></li>
                                        <li><NavLink to="/logout">Đăng xuất</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <NavLink className="nav-link" to="/">
                                <button className="head_cart_button btn btn-outline-success my-2 my-sm-0" type="submit">
                                    <i className="fa fa-shopping-cart fa-2x"></i>
                                    <span>Giỏ hàng</span>
                                    <span className="badge badge-warning">0</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary menu_nav">
                    <div className="container">
                        <NavLink className="nav-link menu_list" to="/">
                            <i className="fa fa-bars fa-2x"></i>
                            <span>DANH MỤC SẢN PHẨM</span>
                        </NavLink>
                        <NavLink className="nav-link mtomap" to="/">
                            <i className="fa fa-map-marker-alt fa-2x"></i>
                            <span>Phường 07, Quận 3, <br />Hồ Chí Minh</span>
                        </NavLink>
                        <NavLink className="nav-link mtoviewed" to="/">
                            <i className="fa fa-angle-down fa-2x"></i>
                            <span>Sản phẩm <br />bạn đã xem</span>
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/tiki-card.svg" alt="" />
                            <span> Hoàn tiền <br />15%</span>
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/tiki-card.svg" alt="" />
                            <span> Giao nhanh <br />2h & hôm sau</span>
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/tiki-card.svg" alt="" />
                            <span> Thực phẩm <br />tươi sống</span>
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/tiki-card.svg" alt="" />
                            <span> Sản phẩm <br />chính hiệu</span>
                        </NavLink>
                        <NavLink className="nav-link" to="/">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/tiki-card.svg" alt="" />
                            <span> 30 ngày <br />đổi trả</span>
                        </NavLink>
                    </div>
                </nav>
            </div>
        )
    }
}
