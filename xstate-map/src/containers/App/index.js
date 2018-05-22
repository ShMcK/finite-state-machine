import React, { Component } from 'react';
import './App.css';
import Fetch from '../../components/Fetch'
import Colors from '../../components/Colors'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Fetch />
        <Colors />
      </div>
    );
  }
}
