import React, { Component } from 'react'

export class Result extends Component {
    render() {
        let {address, num_bikes_available, num_docks_available, lat, lng} = this.props.result;

        let url = `https://www.google.ca/maps/@${lat},${lng},20z`
        return (
            <div className="result">
                <h3>{address}</h3>
                <span><i className="fas fa-bicycle" aria-label="Bicycles available"></i> {num_bikes_available} </span>
                <span><i className="fas fa-charging-station" aria-label="Docks available"></i> {num_docks_available} </span>
                <h3><a href={url} target="_blank">Google Maps</a></h3>
            </div>
        )
    }
}

export default Result
