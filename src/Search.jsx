import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeSearch } from './actions'

const mapStateToProps = (state) => {
    return {searchValue: state.searchValue};
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSearch: (value) => { dispatch(changeSearch(value)) }
    };
};

class Search extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.props.changeSearch(event.target.value);
    }
    
    render() {
        return (
            <div className="Search">
                <input type="text" name="search" value={this.props.searchValue} onChange={this.handleChange} />
            </div>
        );
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Search);
