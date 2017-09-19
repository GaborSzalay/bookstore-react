import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeSearch } from './actions'

class Search extends Component {
    constructor({dispatch}) {
        super();
        this.state = {
            searchValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.dispatch = dispatch.bind(this);
    }
    
    handleChange(event) {
        this.setState({searchValue: event.target.value});
        this.dispatch(changeSearch(event.target.value))
    }
    
    render() {
        return (
            <div className="Search">
                <input type="text" name="search" value={this.state.searchValue} onChange={this.handleChange} />
            </div>
        );
    }
}

Search = connect()(Search);

export default Search;
