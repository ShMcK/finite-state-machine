
export default (dispatch) => {
  let requestTimeout
  return {
    onRequestCancel() {
      clearTimeout(requestTimeout)
    },
    onRequest() {
      requestTimeout = setTimeout(() => {
        dispatch('FAILURE')
      }, 3000)
    }
  }
}
