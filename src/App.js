import React, { Component } from 'react';
import axios from 'axios'
import Header from './Header'
import Search from './Search'
import Results from './Results'
import './setup.css'
import './App.css'


class App extends Component {
    constructor() {
      super()
      this.state = {
        stations: [],
        startResults: [],
        endResults: []
      }
    }
    componentDidMount() {
      this.getStationInfo()
    }

    handleResults = (startStationData, endStationData) => {
      console.log(startStationData, endStationData)
      this.setState({
        startResults: startStationData,
        endResults: endStationData
      })
    }

    getStationInfo = () => {
      const url = 'https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information';
      axios({
        method: 'GET',
        url: url,
        params: {
          format: 'json',
        }
      }).then((res) => {
        this.setState({
          stations: res.data.data.stations
        })
      })
    }

  render() {
    return (
      <> 
      <Header/>
      <main>
          <Search stations={this.state.stations} handleResults={this.handleResults}/>
          <div>
            <Results results = {this.state.startResults}/>
          </div>

          <div>
            <Results results={this.state.endResults} />
          </div>
      </main>
      </>

    )
  }

}


export default App;
