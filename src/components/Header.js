import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Header extends Component {

    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

Header.defaultProps ={
    title : 'Title'
}

Header.propTypes = {
    title  :PropTypes.string
}

export default Header