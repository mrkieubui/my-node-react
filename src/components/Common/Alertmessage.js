import React, { Component } from 'react'

export default class AlertMessage extends Component {
    render() {
        return (
            <div className="alert alert-primary mt-60" role="alert">
                {this.props.message}
            </div>
        )
    }
}
