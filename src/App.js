import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {
  state = {
    user: {
      uid: '2390101',
      userName: 'person',
    }
  }

  render() {
    return (
      <div className="App">
        <Main user={this.state.user} />
      </div>
    );
  }
}

export default App;
