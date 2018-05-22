import React, { Component } from 'react';
import './App.css';
import FetchModule from '../../components/Fetch'
import ColorsModule from '../../components/Colors'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <FetchModule />
        <ColorsModule />
      </div>
    );
  }
}
