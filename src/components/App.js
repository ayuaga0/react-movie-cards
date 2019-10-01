import React, { Component } from 'react';
import Header from './Header';
import Movies from './Movies/Movies'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'React Movie Cards'
    }
  }
  render() {
    return (
     <div>
     <Header title={this.state.title} />
     <Movies />
      </div>
    );
  }
}

export default App;
