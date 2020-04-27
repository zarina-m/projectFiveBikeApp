import React, { Component } from 'react';
import Header from './Header'
import Search from './Search'
import Results from './Results'
import Result from './Result'
import './App.css';

class App extends Component {
    constructor() {
      super()
      this.state = {

      }
    }

  search = (startPoint, endPoint) => {
    console.log(startPoint, endPoint)
  }


  render() {
    return (
      <> 
      <Header/>
      <Search search={this.search}/>
      <Results/>
      </>

    )
  }
}

export default App;
