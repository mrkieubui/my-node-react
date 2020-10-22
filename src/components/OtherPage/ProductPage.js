import React, { Component } from 'react'
import ReactStars from 'react-stars';
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';
import NewProducts from '../HomePage/NewProducts';

export default class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            currentProduct: {},
            productImages: [
                {
                    id: 1,
                    image_url: "https://salt.tikicdn.com/cache/w390/ts/product/27/06/ee/556948f0dfeff98974202a0bce7bf3f4.jpg"
                },
                {
                    id: 2,
                    image_url: "https://salt.tikicdn.com/cache/w390/ts/product/4a/6e/34/6622ce778eb47e14b09e6d41eb5818d9.jpg"
                },
                {
                    id: 3,
                    image_url: "https://salt.tikicdn.com/cache/w390/ts/product/55/be/1a/5b1ce9b2ed206ed61367dc1a4a7c7d37.jpg"
                },
                {
                    id: 4,
                    image_url: "https://salt.tikicdn.com/cache/w390/ts/product/1d/bd/e6/d7c614e59956119f121cc47de6668043.jpg"
                },
                {
                    id: 5,
                    image_url: "https://salt.tikicdn.com/cache/w390/ts/product/4a/6e/34/6622ce778eb47e14b09e6d41eb5818d9.jpg"
                }
            ],
            products: []
        }
    }
    componentDidMount() {
        // Get 1 product
        axios.get('/api/products/' + this.props.match.params.id).then(result => this.setState({ currentProduct: result.data }));
        axios.get('/api/product_images/' + this.props.match.params.id).then(result => {
            if (result.data.length > 0) {
                this.setState({ productImages: result.data })
            }
        });
        axios.get('/api/products').then(result => this.setState({ products: result.data }))
    }

    changeImage = (id) => {
        this.setState({ currentImage: id });
    }
    showMoreImage = (images) => {
        if (images.length > 3) return (
            <div className="more_images">
                <img src={images[3].image_url} alt={images[3].id} onClick={() => this.changeImage(images[3].id)} />
                <div className="plus_icon">
                    <p>Xem thêm <br /> {images.length - 3} hình</p>
                </div>
            </div>
        )
    }
    ratingChanged = (p_rating) => {
        console.log(p_rating);
        // this.setState({ p_rating: p_rating });
    }

    render() {
        var review_images = [
            {
                id: 1,
                image_url: "https://vcdn.tikicdn.com/cache/w170/ts/review/93/77/5b/79f6f4e23bba00dab1e51b87b278fdb3.jpg"
            },
            {
                id: 2,
                image_url: "https://vcdn.tikicdn.com/cache/w170/ts/review/a5/1f/c3/dcf327b2cd7b5789e99186698541ddfc.jpg"
            },
            {
                id: 3,
                image_url: "https://vcdn.tikicdn.com/cache/w170/ts/review/77/59/ab/e2a229af556dcc8c130cf19ed4de59b9.jpg"
            },
            {
                id: 4,
                image_url: "https://vcdn.tikicdn.com/cache/w170/ts/review/e4/42/82/0dc930467ebbdb78e344ac9395279b80.jpg"
            },
            {
                id: 5,
                image_url: "https://vcdn.tikicdn.com/cache/w170/ts/review/45/34/58/1ca24d3f9c38ab95e6b3f935a41db1cc.jpg"
            }
        ]
        var { currentImage, currentProduct, productImages, products } = this.state;
        // console.log(this.props.match.params.id);

        return (
            <div>
                <div className="container product_page">
                    <div className="row">
                        <div className="col-5 left_product">
                            <div className="row">
                                <div className="col-3">
                                    {productImages.map((image, key) => {
                                        if (key <= 2) return (
                                            <img key={'key' + key} src={image.image_url} alt={image.id} onClick={() => this.changeImage(key)} />
                                        ); else return null
                                    })}
                                    <div>
                                        {this.showMoreImage(productImages)}
                                    </div>
                                </div>
                                <div className="col-9">
                                    <img src={productImages[currentImage].image_url} alt="" />
                                </div>
                            </div>
                            <div className="row review_images">
                                {review_images.map((image, index) => {
                                    if (index < 5) return (
                                        <div key={'index' + index} className="col">
                                            <img key={index} src={image.image_url} alt={image.id} />
                                        </div>
                                    ); else return null
                                })}
                            </div>
                            <div className="row product_banner">
                                <img src="https://salt.tikicdn.com/ts/banner/91/76/6b/3a049764cde0da334557f6c48e21e90b.png" alt="" />
                            </div>
                        </div>
                        <div className="col-7 right_product">
                            <div className="top_right_product">
                                <h4>{currentProduct.product_name}</h4>
                                <ReactStars
                                    count={5}
                                    value={parseInt(currentProduct.product_rating)}
                                    onChange={(p_rating) => this.ratingChanged(p_rating)}
                                    size={20}
                                    color2={'#ffd700'} />
                                <Link to="/"><span className="reviews">(Xem 14 đánh giá)</span></Link>
                                <div>
                                    <i className="fa fa-medal"></i>
                                    <span> <strong>Đứng thứ 14</strong> trong <Link to="">Top 100 Smart Tivi - Android Tivi bán chạy tháng này</Link></span>
                                </div>
                                <div className="brand">
                                    Thương hiệu: <Link to="">Samsung</Link>
                                </div>
                                <hr />
                            </div>
                            <div className="row middle_right_product">
                                <div className="col-8">
                                    <div className="row freeship">
                                        <div className="col-2">
                                            <img src="https://salt.tikicdn.com/ts/upload/cd/74/0a/862aa1925b1d4c8b837c544e40e5d4cb.png" alt="" />
                                        </div>
                                        <div className="col-10">
                                            Miễn phí giao hàng (tối đa 50k) cho đơn hàng từ 499k <Link to="">Xem chi tiết</Link>
                                        </div>
                                    </div>
                                    <div className="product_price">
                                        <p>{currentProduct.product_price} ₫</p>
                                        <span>Trả góp 0% chỉ <Link to="">2.069.833 ₫/tháng</Link> trong 6 tháng qua thẻ tín dụng <Link to="">(?)</Link></span>
                                        <span className="product_sale">Tiết kiệm: {currentProduct.product_sale}% (11.481.000 ₫)</span>
                                        <span className="product_sale">Giá thị trường: {currentProduct.product_old_price} ₫</span>
                                    </div>
                                    <hr />
                                    <div className="row properties">
                                        <ul>
                                            <li>Loại Tivi: Smart Tivi, 55inch </li>
                                            <li>Độ phân giải: Ultra HD (3840 x 2160 Pixels)</li>
                                            <li>Hệ điều hành: Tizen</li>
                                            <li>Ứng dụng có sẵn: Kho ứng dụng phong phú và nội dung 4K lớn nhất, Tích hợp ứng dụng iTunes Movies</li>
                                            <li>Công nghệ hình ảnh: Dynamic Crystal Colour, HDR Elite, UHD Dimming, Nâng cấp độ tương phản, Real Game Enhancer</li>
                                            <li>Công nghệ âm thanh: Dolby Digital Plus, DTS Code</li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div className="row payload">
                                        <div className="col-4">
                                            <p>Số lượng:</p>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-outline-secondary">-</button>
                                                <button type="button" className="btn btn-outline-secondary">1</button>
                                                <button type="button" className="btn btn-outline-secondary">+</button>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <button type="button" className="btn btn-danger btn-lg">
                                                <i className="fa fa-shopping-cart"></i>
                                                Chọn mua</button>
                                            <button type="button" className="btn btn-primary btn-lg">Trả góp qua thẻ</button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row shipping">
                                        <h5>THÔNG TIN GIAO HÀNG DỰ KIẾN</h5>
                                        <p>Giao hàng tới Phường 07, Quận 3, Hồ Chí Minh - <Link to="/">ĐỔI ĐỊA CHỈ</Link></p>
                                        <p>Nhà bán Điện Máy Phú Sĩ:</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row commitment">
                                        <div className="col-2">
                                            <i className="fa fa-store"></i>
                                        </div>
                                        <div className="col-10">
                                            <h5>MAYBE</h5>
                                            <p>Cam kết chính hiệu 100%</p>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary btn-block">Xem shop</button>
                                        </div>
                                        <div className="col-2">
                                            <i className="fa fa-usd-circle"></i>
                                        </div>
                                        <div className="col-10">
                                            <p><strong>Tiki hoàn tiền 111%</strong></p>
                                            <p>Nếu phát hiện hàng giả</p>
                                        </div>
                                    </div>
                                    <div className="row other_shops">
                                        <div className="col-8">
                                            <h5>Thủy Tinh Nam Hải</h5>
                                            <p>150.000 đ</p>
                                        </div>
                                        <div className="col-4">
                                            <button className="btn btn-outline-secondary">Chọn</button>
                                        </div>
                                        <div className="col-12">
                                            <p className="blue_date">Thứ 3, ngày 22 tháng 09</p>
                                            <p>Giao tiêu chuẩn</p>
                                            <p>Vận chuyển: 35.000 ₫</p>
                                        </div>
                                    </div>
                                    <div className="row other_shops">
                                        <div className="col-8">
                                            <h5>SHOP MẸ YÊU CON HN</h5>
                                            <p>94.000 ₫</p>
                                        </div>
                                        <div className="col-4">
                                            <button className="btn btn-outline-secondary">Chọn</button>
                                        </div>
                                        <div className="col-12">
                                            <p className="blue_date">Thứ 3, ngày 22 tháng 09</p>
                                            <p>Giao tiêu chuẩn</p>
                                            <p>Vận chuyển: 35.000 ₫</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row services">
                                <h5>DỊCH VỤ & KHUYẾN MÃI LIÊN QUAN</h5>
                                <ul>
                                    <li>Đăng kí gói <strong>TikiNOW</strong> để nhận giao hàng miễn phí và nhiều ưu đãi dành riêng cho thành viên - <NavLink to="/">Xem chi tiết</NavLink></li>
                                    <li>Nhận ngay voucher Tiki 1 triệu đồng và Săn ngay 10 Samsung Note20 Ultra với thẻ Sacombank Tiki Platinum. <NavLink to="/">Xem chi tiết</NavLink></li>
                                    <li>Giảm thêm 5% tối đa 100k (giảm ở phần thanh toán) cho các sản phẩm ngành hàng Điện Gia Dụng, Nhà Cửa Đời Sống, Thể Thao - Dã Ngoại. Ưu đãi chỉ dành riêng cho hội viên TikiNOW gói 1 Năm, Số lượng có hạn, chương trình có thể kết thúc sớm khi hết số lượng áp dụng. Xem chi tiết Mỗi tháng, mỗi khách chỉ sử dụng dc 2 lần.</li>
                                    <li>Miễn phí giao hàng tiêu chuẩn cho đơn hàng từ 249K tối đa 30K. Miễn phí giao hàng tiêu chuẩn cho đơn hàng từ 500K tối đa 50K. Mỗi khách được sử dụng 2 lần/ 1 ưu đãi phí ship</li>
                                    <li>Hoàn tiền 15% cho mọi chi tiêu với Thẻ Tín Dụng Liên Kết Sacombank Tiki Platinum - <NavLink to="/">Mở thẻ ngay</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30">
                        <h4>SẢN PHẨM THƯỜNG ĐƯỢC XEM CÙNG</h4>
                        <NewProducts products={products} limit={5} />
                    </div>
                    <div className="row mt-30 product_detail">
                        <div className="col-9">
                            <h4>Thông tin chi tiết</h4>
                            <hr />
                            <table className="table-striped">
                                <tbody>
                                    <tr>
                                        <td>Thương hiệu</td>
                                        <td>OEM</td>
                                    </tr>
                                    <tr>
                                        <td>Chất liệu</td>
                                        <td>Thủy tinh</td>
                                    </tr>
                                    <tr>
                                        <td>Kích thước</td>
                                        <td>16*7*5</td>
                                    </tr>
                                    <tr>
                                        <td>Xuất xứ thương hiệu</td>
                                        <td>Việt Nam</td>
                                    </tr>
                                    <tr>
                                        <td>Dung tích</td>
                                        <td>500ml</td>
                                    </tr>
                                    <tr>
                                        <td>Trọng lượng</td>
                                        <td>2000</td>
                                    </tr>
                                    <tr>
                                        <td>SKU</td>
                                        <td>7799823121551</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4 className="mt-30">Thông tin chi tiết</h4>
                            <hr />
                            <div className="product_describle">
                                <p>Chai thủy tinh dáng vuông cao cấp 500ml, chất liệu thủy tinh trắng sáng, không bọt khí.</p>
                                <p>Sản phẩm an toàn tuyệt đối cho ngường dùng.</p>
                                <p>Thích hợp dùng đựng nước lọc, nước ép, sinh tố, sữa hạ</p>
                                <p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ...</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <img src="https://c0.anthill.vn/images/2020/09/15/f2b42eb55c93a7ebf8a038c00216524b.png" alt="" />
                        </div>
                    </div>
                    <div className="row product_viewed">
                        <h4 className="mt-30 ml-3">SẢN PHẨM BẠN ĐÃ XEM</h4>
                        <NewProducts products={products} limit={5} />
                    </div>
                    <div className="row product_support">
                        <h4 className="mt-30 ml-3">SẢN PHẨM ĐƯỢC TÀI TRỢ</h4>
                        <NewProducts products={products} limit={5} />
                    </div>
                </div>
            </div>
        )
    }
}
