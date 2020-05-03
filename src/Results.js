import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {
    render() {
       
        return this.props.results.map((result) => (
            
            <Result result={result} />
            
        ));
    }
}

export default Results;