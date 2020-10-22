import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CategoryElectronic from '../Common/Category/CategoryElectronic';
import CategoryPhone from '../Common/Category/CategoryPhone';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_right: 0
        }
    }
    changeCurrentRight = (index) => {
        if (index !== this.state.current_right) {
            console.log(index);
        }
    }
    render() {
        var images = [
            {
                id: 1,
                link: "https://salt.tikicdn.com/cache/w584/ts/banner/2e/7f/a3/62a7d908c9365f00a1d40794563d71cb.png"
            },
            {
                id: 2,
                link: "https://salt.tikicdn.com/cache/w584/ts/banner/eb/5c/ce/b4b576c4b1c989442a98606336ead1f8.png"
            },
            {
                id: 3,
                link: "https://salt.tikicdn.com/cache/w584/ts/banner/ba/95/6a/1ccc58c260bac68db805864ac65adf9c.png"
            },
            {
                id: 4,
                link: "https://salt.tikicdn.com/cache/w584/ts/banner/3a/f7/c5/7d10e550868deddbff8d4f4f4cb23dbb.jpg"
            },
            {
                id: 5,
                link: "https://salt.tikicdn.com/cache/w584/ts/banner/35/3e/ed/83bb664469f993fb9c7bce91c8f994ca.png"
            }
        ]
        return (
            <div className="container category">
                <div className="left_category">
                    <ul>
                        <li className="category_phone">
                            <NavLink to="/categoryPage"><i className="fa fa-mobile"></i>Điện thoại</NavLink>
                            <CategoryPhone />
                        </li>
                        <li className="category_electronic">
                            <NavLink to="/categoryPage"><i className="fa fa-washer"></i>Điện gia dụng</NavLink>
                            <CategoryElectronic />
                        </li>
                        <li className="category_accessory">
                            <NavLink to="/categoryPage"><i className="fa fa-headphones"></i>Phụ kiện</NavLink>
                            <CategoryPhone />
                        </li>
                        <li className="category_laptop">
                            <NavLink to="/categoryPage"><i className="fa fa-laptop"></i>Laptop</NavLink>
                            <CategoryElectronic />
                        </li>
                        <li className="category_camera">
                            <NavLink to="/categoryPage"><i className="fa fa-camera"></i>Máy ảnh</NavLink>
                            <CategoryPhone />
                        </li>
                        <li className="category_tablet">
                            <NavLink to="/categoryPage"><i className="fa fa-tv"></i>Máy tính bảng</NavLink>
                            <CategoryElectronic />
                        </li>
                        <li className="category_babe">
                            <NavLink to="/categoryPage"><i className="fa fa-baby"></i>Đồ trẻ em</NavLink>
                            <CategoryPhone />
                        </li>
                        <li className="category_food">
                            <NavLink to="/categoryPage"><i className="fa fa-utensils"></i>Thực phẩm</NavLink>
                            <CategoryElectronic />
                        </li>
                        <li className="category_fashion">
                            <NavLink to="/categoryPage"><i className="fa fa-tshirt"></i>Thời trang</NavLink>
                            <CategoryPhone />
                        </li>
                        <li className="category_sport">
                            <NavLink to="/categoryPage"><i className="fa fa-futbol"></i>Thể thao</NavLink>
                            <CategoryElectronic />
                        </li>
                        <li className="category_motor">
                            <NavLink to="/categoryPage"><i className="fa fa-motorcycle"></i>Xe máy</NavLink>
                            <CategoryPhone />
                        </li>
                        <li className="category_book">
                            <NavLink to="/categoryPage"><i className="fa fa-book"></i>Sách</NavLink>
                            <CategoryElectronic />
                        </li>
                        <li className="category_office">
                            <NavLink to="/categoryPage"><i className="fa fa-briefcase"></i>Văn phòng phẩm</NavLink>
                            <CategoryPhone />
                        </li>
                        <li className="category_foreign">
                            <NavLink to="/categoryPage"><i className="fa fa-map"></i>Quốc tế <span className="badge badge-danger">Mới</span></NavLink>
                            <CategoryElectronic />
                        </li>
                        <li className="category_voucher">
                            <NavLink to="/categoryPage"><i className="fa fa-id-card "></i>Voucher</NavLink>
                            <CategoryPhone />
                        </li>
                    </ul>
                </div>
                <div className="right_category">
                    <div className="row category_default">
                        <div className="col-7">
                            <div className="row">
                                {/* <img src="https://salt.tikicdn.com/cache/w584/ts/banner/f4/1a/56/9dcbdc76f3e031843288528eb2ed27b3.png" alt="" /> */}
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        {images.map((item, key) => {
                                            if (key === 0) return (
                                                <li key={'key' + key} data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                            );
                                            else return (
                                                <li key={'key2' + key} data-target="#carouselExampleIndicators" data-slide-to={key} />
                                            )
                                        })}
                                    </ol>
                                    <div className="carousel-inner">
                                        {images.map((image, index) => {
                                            if (index === 0) return (
                                                <div key={'index' + index} className="carousel-item active" >
                                                    <NavLink to="/promoPage"><img className="d-block w-100" src={images[0].link} alt="activeimage" /></NavLink>
                                                </div>
                                            );
                                            else return (
                                                <div className="carousel-item" key={'index2' + index} >
                                                    <NavLink to="/ShopPage"><img className="d-block w-100" src={image.link} alt={index} /></NavLink>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <NavLink to="/promoPage"><img src="https://salt.tikicdn.com/cache/w292/ts/banner/0b/45/ec/778844f839d6fc06a71af9fc6c076760.png" alt="" /></NavLink>
                                </div>
                                <div className="col-6">
                                    <NavLink to="/promoPage"><img src="https://salt.tikicdn.com/cache/w292/ts/banner/f5/2f/b5/49de92b8996b0bdbdcd7d677e2365f27.png" alt="" /></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <div className="col-6">
                                    <NavLink to="/promoPage"><img src="https://salt.tikicdn.com/cache/w206/ts/banner/c6/f8/48/44c380b52d8f5491017b4506b111ba9d.png" alt="" /></NavLink>
                                </div>
                                <div className="col-6">
                                    <NavLink to="/promoPage"><img src="https://salt.tikicdn.com/cache/w206/ts/banner/c6/f8/48/44c380b52d8f5491017b4506b111ba9d.png" alt="" /></NavLink>
                                </div>
                                <div className="col-6">
                                    <NavLink to="/promoPage"><img src="https://salt.tikicdn.com/cache/w206/ts/banner/c6/f8/48/44c380b52d8f5491017b4506b111ba9d.png" alt="" /></NavLink>
                                </div>
                                <div className="col-6">
                                    <NavLink to="/promoPage"><img src="https://salt.tikicdn.com/cache/w206/ts/banner/c6/f8/48/44c380b52d8f5491017b4506b111ba9d.png" alt="" /></NavLink>
                                </div>
                                <div className="col-6">
                                    <NavLink to="/promoPage"><img src="https://salt.tikicdn.com/cache/w206/ts/banner/3b/5c/ed/6132445b9ca9d3d4bf2e3c74bd3bb7ba.png" alt="" /></NavLink>
                                </div>
                                <div className="col-6">
                                    <NavLink to="/promoPage"><img src="https://salt.tikicdn.com/cache/w206/ts/banner/a6/ae/39/717dfb20149bb0d9e58d45272a5fa576.png" alt="" /></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
