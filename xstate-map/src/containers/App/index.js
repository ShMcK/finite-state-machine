import React, { Component } from 'react';
import './App.css';
import MapContext from '../../machines/map'

export default class App extends Component {
  render() {
    return (
      <MapContext.Provider>
        <MapContext.Consumer>
          {({ value, transitions, dispatch }) => (
            <div className="App">
              <h3 className='State'>{value}</h3>
              <ul className='Options'>
                {Object.keys(transitions).map((transition) => (
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
        </MapContext.Consumer>
      </MapContext.Provider>
    );
  }
}
