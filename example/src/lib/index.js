import * as React from 'react'

export default function Machine({ name, state, transitions }) {
  const Context = React.createContext(name)
  return {
    Consumer: Context.Consumer,
    Provider: class Provider extends React.Component {
      state = { state, transitions }
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
          <Context.Provider value={machine}>
            {this.props.children}
          </Context.Provider>
        )
      }
    }
  }
}
