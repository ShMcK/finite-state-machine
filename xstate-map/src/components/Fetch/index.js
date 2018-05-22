import React, { Component } from 'react';
import './Fetch.css';
import FetchContext from '../../machines/fetch'
import Fetch from './Fetch'

export default class FetchModule extends Component {
  render() {
    return (
      <FetchContext.Provider>
        <FetchContext.Consumer>
          {props => (
            <Fetch {...props} />
          )}
        </FetchContext.Consumer>
      </FetchContext.Provider>
    );
  }
}
