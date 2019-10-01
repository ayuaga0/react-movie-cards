import React, {Component} from 'react';

export default class Starrating extends Component {
    render() {
        return (
            <div>
            <p>Star Rating {this.props.rating}</p>
            </div>
        )
    }
}