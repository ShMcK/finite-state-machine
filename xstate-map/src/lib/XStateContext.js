import React from 'react'

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export default function createXStateContext ({ name, machine, actions }) {
  name = name || 'defaultName'

  const Context = React.createContext(name)
  
  class Provider extends React.Component {
    static displayName = `${capitalize(name)}Provider`
    
    state = {
      value: machine.initialStateValue,
      transitions: machine.states[machine.initialStateValue] ? (machine.states[machine.initialStateValue].on || []) : []
    }

    actions = actions ? actions(this.dispatch) : {}

    dispatch = (event) => {
      const nextState = machine.transition(this.state.value, event)
  
      for (const actionKey of nextState.actions) {
        const action = this.actions[actionKey]
        if (action) {
          action(event)
        }
      }

      switch(typeof nextState.value) {
        // handle parallel or nested states
        case 'object':
          const value = {}
          const transitions = []
          for (const stateKey of Object.keys(nextState.value)) {
            value[stateKey] = nextState.value[stateKey]
            if (machine.states[nextState.value[stateKey].on]) {
              transitions.push(machine.states[nextState.value[stateKey].on])
            }
          }
          this.setState({ value, transitions })
          break
        default:
          // handle default state
          this.setState({
            value: nextState.value,
            transitions: machine.states[nextState.value].on
          })
      }
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