import { Machine } from 'xstate'
import XStateContext from '../lib/XStateContext'

const machine = Machine({
  key: 'colors',
  parallel: true,
  states: {
    background: {
      initial: 'white',
      states: {
        white: {
          on: { TOGGLE_BACKGROUND: 'blue' }
        },
        blue: {
          on: { TOGGLE_BACKGROUND: 'white' }
        }
      }
    },
    text: {
      initial: 'black',
      states: {
        black: {
          on: { TOGGLE_TEXT: 'white' }
        },
        white: {
          on: { TOGGLE_TEXT: 'black' }
        }
      }
    },
  }
})

export default XStateContext({ name: 'colors', machine })
