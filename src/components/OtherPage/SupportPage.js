import React, { Component } from 'react'

export default class SupportPage extends Component {
    render() {
        return (
            <div className="container row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h4>Gửi yêu cầu</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="InputEmail1">Địa chỉ email của bạn</label>
                            <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Nhập email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputPassword1">Tiêu đề</label>
                            <input type="text" className="form-control" id="InputTitle" placeholder="Nhập tiêu đề" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="RequestBody"> Nội dung</label>
                            <textarea className="form-control" id="RequestBody" rows={3} defaultValue={"Nhập nội dung"} />
                            <small id="RequestBodyHelp" className="form-text text-muted">Tiki Care sẽ hồi đáp yêu cầu của quý khách trong vòng 24 tiếng. Mọi yêu cầu cần xử lý gấp, xin vui lòng gọi số Hotline của Tiki: 1900-6035 để được hỗ trợ.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputCode">Mã số đơn hàng</label>
                            <input type="text" className="form-control" id="InputCode" aria-describedby="CodeHelp" placeholder="Nhập mã đơn hàng" />
                            <small id="CodeHelp" className="form-text text-muted">Vui lòng nhập mã số đơn hàng (nếu có), ví dụ: 200345014.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputSupport">Vui lòng chọn vấn đề cần hỗ trợ</label>
                            <select className="form-control" id="InputSupport">
                                <option>Phương án 1</option>
                                <option>Phương án 2</option>
                                <option>Phương án 3</option>
                                <option>Phương án 4</option>
                                <option>Phương án 5</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block">Gửi</button>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </form>

                </div>
                <div className="col-3"></div>
            </div>
        )
    }
}
