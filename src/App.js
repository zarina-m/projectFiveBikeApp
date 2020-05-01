import React, { Component } from 'react';
import axios from 'axios'
import Header from './Header'
import Search from './Search'
import Results from './Results'
import Result from './Result'
import './setup.css'
import './App.css'


class App extends Component {
    constructor() {
      super()
      this.state = {
        stations: [],
      }
    }
    componentDidMount() {
      this.getStationInfo()
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
          <Search stations={this.state.stations} />
          <Results />
      </main>
      </>

    )
  }

}


export default App;
