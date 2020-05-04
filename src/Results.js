import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {
    render() {
        if (this.props.results.length > 0) {
            return (
                this.props.results.map((result) => (
                    <Result result={result} />
            )));
            }
        else{
            return (<span>No results found, please search again</span>)
        }
    }
}

export default Results;