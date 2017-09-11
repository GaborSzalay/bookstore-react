import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }
    
    render() {
        return (
            <div className="Search">
                <input type="text" name="search" value={this.state.searchValue} onChange={this.handleChange} />
            </div>
        );
    }
}

export default Search;
