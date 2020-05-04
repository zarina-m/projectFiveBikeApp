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
        hasResults: false,
        stations: [],
        startResults: [],
        endResults: []
      }
    }
    //When application loads, retrieve all the station information
    componentDidMount() {
      this.getStationInfo()
    }
    //Save nearby station info in state
    handleResults = (startStationData, endStationData) => {
      this.setState({
        startResults: startStationData,
        endResults: endStationData,
        hasResults: true
      })
    }
    //Axios call to retrieve all station info
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
      <main className="wrapper">
          <Search stations={this.state.stations} handleResults={this.handleResults}/>
          <section className="results" style={{visibility: this.state.hasResults ? "visible" : "hidden" }}>
            <div> 
              <h2>Start</h2>
              <Results results = {this.state.startResults}/>
            </div>
            <div>
              <h2>End</h2>
              <Results results={this.state.endResults} />
            </div>
          </section>
      </main>
      </>

    )
  }

}


export default App;
