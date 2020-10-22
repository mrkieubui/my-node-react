import React, { Component } from 'react'

export default class RequestPage extends Component {
    render() {
        return (
            <div className="container-fluid request_page">
                <div className="row search_request">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="form-group">
                            <input type="text" className="form-control" id="searchInput" aria-describedby="searchInput" placeholder="Tìm kiếm" />
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="row container category_request">
                    <div className="col-4">
                        <button className="btn btn-outline-primary btn-block">Tài khoản của tôi</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-outline-primary btn-block">Đặt hàng và thanh toán</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-outline-primary btn-block">Giao nhận hàng</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-outline-primary btn-block">Đổi trả, bảo hành và bồi hoàn</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-outline-primary btn-block">Tiki NOW</button>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-outline-primary btn-block">Dịch vụ và chương trình</button>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-primary btn-block">Thông tin về Tiki</button>
                    </div>
                </div>
            </div>

        )
    }
}
