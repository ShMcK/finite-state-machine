import React from 'react'
import * as actionMap from './actions'

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export default function createXStateContext ({ name, machine }) {
  const Context = React.createContext(name)

  class Provider extends React.Component {
    static displayName = `${capitalize(name)}Provider`
    state = {
      value: machine.initial,
      transitions: machine.states[machine.initial].on
    }
    dispatch = (event) => {
      const nextState = machine.transition(this.state.value, event)
  
      for (const actionKey of nextState.actions) {
        const action = actionMap[actionKey]
        if (action) {
          action(event, this.dispatch)
        }
      }
  
      // update the atomic state (yes, there's better ways of doing this)
      this.setState({
        value: nextState.value,
        transitions: machine.states[nextState.value].on
      })
    }
    render() {
      const value = {
        dispatch: this.dispatch,
        ...this.state,
      }
      return (
        <Context.Provider value={value}>
          {this.props.children}
        </Context.Provider>
      )
    }
  }

  return {
    Consumer: Context.Consumer,
    Provider,
  }
}