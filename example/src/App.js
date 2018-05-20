import React, { Component } from 'react';
import machine from './machine'
import './App.css';

const BasicContext = React.createContext('basic')

class BasicProvider extends Component {
  state = machine
  dispatch = (actionName, ...payload) => {
    const actions = this.state.transitions[this.state.state]
    const action = actions[actionName]
    if (action) {
      action.apply(this, payload)
    } else {
      console.warn(`cannot transition to ${actionName}`) //?
    }
  }
  transitionTo = (nextState) => {
    this.setState({
      state: nextState,
    })
  }
  render() {
    const machine = {
      state: this.state.state,
      transitions: this.state.transitions,
      dispatch: this.dispatch,
    }
    return (
      <BasicContext.Provider value={machine}>
        {this.props.children}
      </BasicContext.Provider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <BasicProvider>
        <BasicContext.Consumer>
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
        </BasicContext.Consumer>
      </BasicProvider>
    );
  }
}

export default App;
