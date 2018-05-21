import { Machine } from 'xstate'
import XStateContext from '../lib/XStateContext'

const machine = Machine({
  initial: 'idle',
  states: {
    idle: {
      on: {
        REQUEST: {
          pending: {
            actions: ['onAction']
          }
        },
      },
      onExit: 'onExit',
    },
    pending: {
      on: {
        SUCCESS: 'idle',
        FAILURE: 'rejected',
        CANCEL: 'idle',
      },
      onEntry: 'onEnter',
      onExit: 'onExit',
    },
    rejected: {
      on: {
        RETRY: 'pending',
      }
    },
  }
})

export default XStateContext({ name: 'map', machine })
