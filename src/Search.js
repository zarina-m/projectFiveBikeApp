import React, { Component } from 'react'

export class Search extends Component {
    state = {
        startPoint: '',
        endPoint: '',
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.startPoint, this.state.endPoint);
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" name="startPoint" value={this.state.startPoint} onChange={this.onChange}></input>
                <input type="text" name="endPoint" value={this.state.endPoint} onChange={this.onChange}></input>
                <input type="submit" value ="Submit"></input>
            </form>
        )
    }
}

export default Search
