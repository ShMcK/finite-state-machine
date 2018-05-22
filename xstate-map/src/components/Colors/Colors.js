import React from 'react'

export default class Colors extends React.Component {
  onToggleBackground = () => {
    this.props.dispatch('TOGGLE_BACKGROUND')
  }
  onToggleText = () => {
    this.props.dispatch('TOGGLE_TEXT')
  }
  render() {
    const { value } = this.props
    const styles = { backgroundColor: value.background, color: value.text }  
    return (
      <div className='Container' style={styles}>
        <h5>Colors (parallel)</h5>
        <button
          className='Button'
          onClick={this.onToggleBackground}
        >Background</button>
        <button
          className='Button'
          onClick={this.onToggleText}
        >Text</button>
      </div>
    )
  }
}