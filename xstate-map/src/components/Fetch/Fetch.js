import React from 'react'

export default class Fetch extends React.Component {
  get transitionsList() {
    return Object.keys(this.props.transitions || {})
  }
  transitionItem = (transition) => {
    return (
      <li key={transition}>
        <button
          className='Button'
          onClick={() => this.onTransition(transition)}
        >
          {transition}
        </button>
      </li>
    )
  }
  onTransition = (transition) => {
    this.props.dispatch(transition)
  }
  render() {
    return (
      <div className='Container'>
        <h5>Fetch (transitions)</h5>
        <h3 className='State'>{this.props.value}</h3>
        <ul className='Options'>
          {this.transitionsList.map(this.transitionItem)}
        </ul>
      </div>
    )
  }
}
