import React from 'react';
import './Colors.css';
import ColorsContext from '../../machines/colors'

export default class Colors extends React.Component {
  render() {
    return (
      <ColorsContext.Provider>
        <ColorsContext.Consumer>
          {({ value, transitions, dispatch }) => {
            const styles = { backgroundColor: value.background, color: value.text }
            return (
              <div className='Container' style={styles}>
                <h5>Colors (parallel)</h5>
                <button
                  className='Button'
                  onClick={() => dispatch('TOGGLE_BACKGROUND')}
                >Background</button>
                <button
                  className='Button'
                  onClick={() => dispatch('TOGGLE_TEXT')}
                >Text</button>
              </div>
            )
        }}
        </ColorsContext.Consumer>
      </ColorsContext.Provider>
    );
  }
}
