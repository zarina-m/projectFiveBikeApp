import React, { Component } from 'react'
import axios from 'axios'

export class Search extends Component {
    state = {
        startLocation: "",
        endLocation: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    getLocationInfo = async (location) => {
        if (location.toLowerCase().indexOf('toronto') === -1) {
            location = location + ' toronto'
        }
        const url = 'http://open.mapquestapi.com/geocoding/v1/address';
        const key = 'oG2GROEUtNBuOk8SP7rT4qE7fPSTy8mo'
        let result = await axios({
            method: 'GET',
            url: url,
            params: {
                key: key,
                format: 'json',
                location: location
            }
        });

        return result.data.results[0].locations[0].latLng
    }
    //Haversine formula
    getDistance = (lat1, lon1, lat2, lon2) => {
            let p = 0.017453292519943295;    // Math.PI / 180
            let c = Math.cos;
            let a = 0.5 - c((lat2 - lat1) * p) / 2 +
                c(lat1 * p) * c(lat2 * p) *
                (1 - c((lon2 - lon1) * p)) / 2;

            return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }

    getClosestStations = (latlong) => {
        let closeStations = []
        for (let i = 0; i < this.props.stations.length; i++) {
            let station = this.props.stations[i];

            let distance = this.getDistance(latlong.lat, latlong.lng, station.lat, station.lon)
            if (distance < 0.3) {
                closeStations.push(station)
            }
        } 
        return closeStations

    }

    getStationStatus = async () => {
        let url = 'https://toronto-us.publicbikesystem.net/ube/gbfs/v1/en/station_status'
        let result = await axios({
            method: 'GET',
            url: url,
            params: {
                format: 'json',
            }
        });
        return result.data.data.stations
    }

    getCompleteStationData = (stationStatus, stationInfo) => {
        let stationData = []
        
        stationStatus.forEach((stationDetail) => {
            stationInfo.forEach((info) => {
                if (stationDetail.station_id === info.station_id && stationDetail.status === "IN_SERVICE") {
                    let stationInfo = {
                        station_id: stationDetail.station_id,
                        num_bikes_available: stationDetail.num_bikes_available,
                        num_docks_available: stationDetail.num_docks_available,
                        address: info.address
                    }

                    stationData.push(stationInfo)
                }
            })
        })

        return stationData

    } 

    search = async (e) => {
        e.preventDefault()
        let startLatLong = await this.getLocationInfo(this.state.startLocation);
        let endLatLong = await this.getLocationInfo(this.state.endLocation);

        let startCloseStations = this.getClosestStations(startLatLong)
        let endCloseStations = this.getClosestStations(endLatLong)
        console.log(startCloseStations)
        console.log(endCloseStations)
        let stationStatus = await this.getStationStatus();

        let startStationData = this.getCompleteStationData(stationStatus, startCloseStations)
        let endStationData = this.getCompleteStationData(stationStatus, endCloseStations)
        this.props.handleResults(startStationData, endStationData)
    }

    render() {
        return (
            <section className="search outerWrapper">
                <form onSubmit={this.search}>
                    <input type="text" name="startLocation" value={this.state.startPoint} onChange={this.onChange} placeholder="Starting point" required></input>
                    <button type="submit" value="Submit">Submit</button>
                    <input type="text" name="endLocation" value={this.state.endPoint} onChange={this.onChange} placeholder="Ending point"></input>
                </form>
            </section>
        )
    }
}

export default Search
