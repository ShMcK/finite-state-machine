
export default (dispatch) => {
  let requestTimeout
  return {
    onRequestCancel() {
      clearTimeout(requestTimeout)
    },
    onRequest(event, value) {
      requestTimeout = setTimeout(() => {
        dispatch('FAILURE')
      }, 3000)
    }
  }
}
