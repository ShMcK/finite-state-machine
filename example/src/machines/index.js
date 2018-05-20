export const basic = {
  name: 'basic',
  state: 'idle',
  transitions:  {
    'idle': {
      click() {
        this.transitionTo('fetching')
      },
    },
    'fetching': {
      success() {
        this.transitionTo('idle')
      },
      failure() {
        this.transitionTo('error')
      }
    },
    'error': {
      retry() {
        this.transitionTo('idle')
        this.dispatch('click')
      }
    }
  }
}
