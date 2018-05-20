import React, { Component } from 'react';
import Machine from './lib'
import { basic } from './machines'
import './App.css';

const { Provider, Consumer } = new Machine(basic)

class App extends Component {
  render() {
    return (
      <Provider>
        <Consumer>
          {({ state, transitions, dispatch }) => (
            <div className="App">
              <h3>{state}</h3>
              <div>
              {Object.keys(transitions[state]).map((transition) => (
                <button
                  onClick={() => dispatch(transition)}
                >
                  {transition}
                </button>
              ))}
              </div>
            </div>
          )}
        </Consumer>
      </Provider>
    );
  }
}

export default App;
