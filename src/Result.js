import React, { Component } from 'react'

export class Result extends Component {
    render() {
        let {address, num_bikes_available, num_docks_available} = this.props.result;
        return (
            <div>
                <h4>{address}</h4>
                <span>{num_bikes_available}</span>
                <span>{num_docks_available}</span>
            </div>
        )
    }
}

export default Result
