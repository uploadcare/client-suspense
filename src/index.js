import { createElement as h, lazy, Suspense, useState, useEffect } from 'react'

function ClientSuspense (props) {
  var state = useState(false)
  var isClient = state[0]
  var setClient = state[1]

  useEffect(function () {
    setClient(true)
  }, [setClient])

  return isClient ? h(Suspense, props) : props.fallback
}

export { lazy, ClientSuspense as Suspense }
