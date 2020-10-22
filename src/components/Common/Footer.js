import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className="container footer mt-60">
                <div className="row register">
                    <div className="col-2">
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png" alt="" />
                    </div>
                    <div className="col-4">
                        <h4>Đăng ký nhận bản tin Tiki</h4>
                        <h5>Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</h5>
                    </div>
                    <div className="col-6">
                        <form className="form-inline">
                            <div className="form-group mx-sm-3 mb-2">
                                <input type="text" className="form-control" id="register-email" placeholder="Địa chỉ email của bạn" />
                            </div>
                            <button type="button" className="btn btn-info">Đăng ký</button>
                        </form>
                    </div>
                </div>
                <div className="row footer_block mt-60">
                    <div className="col support">
                        <h3>HỖ TRỢ KHÁCH HÀNG</h3>
                        <h5>Hotline chăm sóc khách hàng: 1900-6035 <br />
                            <span>(1000đ/phút , 8-21h kể cả T7, CN)</span></h5>

                        <NavLink to="/requestPage">Các câu hỏi thường gặp</NavLink>
                        <NavLink to="/supportPage">Gửi yêu cầu hỗ trợ</NavLink>
                        <NavLink to="">Hướng dẫn đặt hàng</NavLink>
                        <NavLink to="">Phương thức vận chuyển</NavLink>
                        <NavLink to="">Chính sách đổi trả</NavLink>
                        <NavLink to="">Hướng dẫn mua trả góp</NavLink>
                        <NavLink to="">Chính sách hàng nhập khẩu</NavLink>
                        <NavLink to="">Hỗ trợ khách hàng: hotro@tiki.vn</NavLink>
                        <NavLink to="">Báo lỗi bảo mật: security@tiki.vn</NavLink>
                    </div>
                    <div className="col about">
                        <h3>VỀ TIKI</h3>
                        <NavLink to="">Giới thiệu Tiki</NavLink>
                        <NavLink to="">Tuyển Dụng</NavLink>
                        <NavLink to="">Chính sách bảo mật thanh toán</NavLink>
                        <NavLink to="">Chính sách bảo mật thông tin cá nhân</NavLink>
                        <NavLink to="">Chính sách giải quyết khiếu nại</NavLink>
                        <NavLink to="">Điều khoản sử dụng</NavLink>
                        <NavLink to="">Giới thiệu Tiki Xu</NavLink>
                        <NavLink to="">Bán hàng doanh nghiệp</NavLink>
                    </div>
                    <div className="col associate">
                        <h3>HỢP TÁC VÀ LIÊN KẾT</h3>
                        <NavLink to="">Quy chế hoạt động Sàn GDTMĐT</NavLink>
                        <NavLink to="">Bán hàng cùng Tiki</NavLink>
                    </div>
                    <div className="col payment">
                        <h3>PHƯƠNG THỨC THANH TOÁN</h3>
                        <div className="row">
                            <NavLink to=""><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/visa.svg" alt="" /></NavLink>
                            <NavLink to=""><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/mastercard.svg" alt="" /></NavLink>
                            <NavLink to=""><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/jcb.svg" alt="" /></NavLink>
                            <NavLink to=""><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/cash.svg" alt="" /></NavLink>
                            <NavLink to=""><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/internet-banking.svg" alt="" /></NavLink>
                            <NavLink to=""><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/installment.svg" alt="" /></NavLink>
                        </div>
                    </div>
                    <div className="col connect">
                        <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
                        <div className="row">
                            <NavLink to=""><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/fb.svg" alt="" /></NavLink>
                            <NavLink to=""><img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/youtube.svg" alt="" /></NavLink>
                        </div>
                        <h3>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h3>
                        <div className="row connect_app">
                            <NavLink to=""><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png" alt="" /></NavLink>
                            <NavLink to=""><img src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png" alt="" /></NavLink>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row footer_address">
                    <div className="col-6">
                        <p><strong>Địa chỉ văn phòng</strong>: 52 Út Tịch, phường 4, quận Tân Bình, thành phố Hồ Chí Minh</p>
                        <p>Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng</p>
                        <p><strong>© 2016 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn</strong></p>
                        <p>Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 06/01/2010</p>

                    </div>
                    <div className="col-3"></div>
                    <div className="col-3">
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png" alt="" />
                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
