import React, {Component} from 'react';

import Landing from './src/screens/landing';
import Login from './src/screens/login'
import Register from './src/screens/register'
import Home from './src/screens/home'
import Trans from './src/screens/transaction'
import Profile from './src/screens/profile'
import Detail from './src/screens/detail'

export default class App extends Component {
  render() {
    return (
      <>
        <Home/>
      </>
    )
  }
}
