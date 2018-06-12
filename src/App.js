import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import Login from './Login';

class App extends Component {
  state = {
    user: {
      uid: '',
      userName: 'bob',
    }
  }

  render() {
    let isLoggedIn = true

    if(this.state.user.userName == ''){
      isLoggedIn = false
    }

    return (
      <div className="App">
        {isLoggedIn ? <Main user={this.state.user} /> : <Login />}
        
      </div>
    );
  }
}

export default App;
