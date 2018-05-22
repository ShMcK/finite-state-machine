import { Machine } from 'xstate'
import XStateContext from '../../lib/XStateContext'
import * as actions from './actions'

const machine = Machine({
  key: 'fetch',
  initial: 'idle',
  states: {
    idle: {
      on: {
        REQUEST: 'pending',
      },
    },
    pending: {
      on: {
        SUCCESS: 'idle',
        FAILURE: 'rejected',
        CANCEL: {
          idle: {
            actions: ['onRequestCancel']
          }
        }
      },
      onEntry: 'onRequest',
    },
    rejected: {
      on: {
        RETRY: 'pending',
      }
    },
  }
})

export default XStateContext({ name: 'fetch', machine, actions })
