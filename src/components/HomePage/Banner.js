import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Banner extends Component {
    render() {
        return (
            <div className="container banner">
                <div className="row">
                    <div className="col-3">
                        <NavLink to="/shopPage">
                            <img src="https://salt.tikicdn.com/cache/w295/ts/banner/f7/cc/78/8ddb36da4b6379835646a1b7ae8386ee.png" alt="" />
                        </NavLink>
                    </div>
                    <div className="col-3">
                        <NavLink to="/shopPage">
                            <img src="https://salt.tikicdn.com/cache/w295/ts/banner/f7/cc/78/8ddb36da4b6379835646a1b7ae8386ee.png" alt="" />
                        </NavLink>
                    </div>
                    <div className="col-3">
                        <NavLink to="/shopPage">
                            <img src="https://salt.tikicdn.com/cache/w295/ts/banner/f7/cc/78/8ddb36da4b6379835646a1b7ae8386ee.png" alt="" />
                        </NavLink>
                    </div>
                    <div className="col-3">
                        <NavLink to="/shopPage">
                            <img src="https://salt.tikicdn.com/cache/w295/ts/banner/f7/cc/78/8ddb36da4b6379835646a1b7ae8386ee.png" alt="" />
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
