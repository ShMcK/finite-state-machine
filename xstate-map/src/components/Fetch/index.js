import React, { Component } from 'react';
import './Fetch.css';
import FetchContext from '../../machines/fetch'

export default class Fetch extends Component {
  render() {
    return (
      <FetchContext.Provider>
        <FetchContext.Consumer>
          {({ value, transitions, dispatch }) => (
            <div className='Container'>
              <h5>Fetch (transitions)</h5>
              <h3 className='State'>{value}</h3>
              <ul className='Options'>
                {Object.keys(transitions || {}).map((transition) => (
                  <li key={transition}>
                    <button
                      className='Button'
                      onClick={() => dispatch(transition)}
                    >
                      {transition}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </FetchContext.Consumer>
      </FetchContext.Provider>
    );
  }
}
