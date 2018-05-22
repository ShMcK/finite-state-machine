
let requestTimeout

export const onRequestCancel = () => {
  clearTimeout(requestTimeout)
}

export const onRequest = (_, dispatch) => {
  // always fails
  requestTimeout = setTimeout(() => {
    dispatch('FAILURE')
  }, 3000)
}
