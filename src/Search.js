import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeSearch } from './actions'

class Search extends Component {
    constructor({ dispatch }) {
        super();
        console.log(dispatch)
    

        this.handleChange = this.handleChange.bind(this);
        this.dispatch = dispatch.bind(this);
    }
    
    handleChange(event) {
        this.dispatch(changeSearch(event.target.value))
        console.log(this.props);
    }
    
    render() {
        return (
            <div className="Search">
                <input type="text" name="search" value={this.props.searchValue} onChange={this.handleChange} />
            </div>
        );
    }
}

export default connect( state => { return {searchValue: state.searchValue} } )(Search);
